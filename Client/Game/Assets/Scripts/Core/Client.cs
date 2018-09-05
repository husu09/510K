using System;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using UnityEngine;

public class Client  {
    // 事件处理
    private IClientHandler handler;
    // 消息分发
    private MsgDispatch msgDispatch;
    
    public Client(IClientHandler handler, MsgDispatch msgDispatch)
    {
        this.handler = handler;
        this.msgDispatch = msgDispatch;
    }


    // 作为客户端，开始异步连接服务器
    public void Connect(string ip, int port)
    {
        IPEndPoint ipe = new IPEndPoint(IPAddress.Parse(ip), port);
        try
        {
            Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            // 开始连接
            socket.BeginConnect(ipe, new AsyncCallback(ConnectionCallback), socket);
        }
        catch (Exception ex)
        {
            handler.OnConnectFailed(ex);
        }
    }

    // 客户端异步连接回调
    void ConnectionCallback(IAsyncResult ar)
    {
        Socket client = (Socket)ar.AsyncState;
        try
        {
            // 与服务器取得连接
            client.EndConnect(ar);

            // 通知已经成功连接到服务器
            handler.OnConnected(client);

            // 开始异步接收服务器信息
            NetPacket packet = new NetPacket();
            packet.socket = client;
            client.BeginReceive(packet.bytes, 0, NetPacket.headerLength, SocketFlags.None, new AsyncCallback(ReceiveHeader), packet);
        }
        catch (Exception ex)
        {
            handler.OnConnectFailed(client, ex);
        }
    }

    // 接收数据主要是通过ReceiveHeader和ReceiveBody两个函数。
    void ReceiveHeader(IAsyncResult ar)
    {
        NetPacket packet = (NetPacket)ar.AsyncState;
        try
        {
            // 返回网络上接收的数据长度
            int read = packet.socket.EndReceive(ar);
            // 已断开连接
            if (read < 1)
            {
                // 通知丢失连接
                handler.OnLost(packet);
                return;
            }

            packet.readLength += read;
            // 消息头必须读满4个字节
            if (packet.readLength < NetPacket.headerLength)
            {
                packet.socket.BeginReceive(packet.bytes,
                    packet.readLength,                          // 存储偏移已读入的长度
                    NetPacket.headerLength - packet.readLength, // 这次只读入剩余的数据
                    SocketFlags.None,
                    new AsyncCallback(ReceiveHeader),
                    packet);
            }
            else
            {
                // 获得消息体长度
                packet.DecodeHeader();

                packet.readLength = 0;
                // 开始读取消息体
                packet.socket.BeginReceive(packet.bytes,
                    NetPacket.headerLength,
                    packet.bodyLenght,
                    SocketFlags.None,
                    new AsyncCallback(ReceiveBody),
                    packet);
            }

        }
        catch (Exception ex)
        {
            handler.OnError("ReceiveHeader", ex);
        }
    }

    // 接收体消息
    void ReceiveBody(IAsyncResult ar)
    {
        NetPacket packet = (NetPacket)ar.AsyncState;

        try
        {
            // 返回网络上接收的数据长度
            int read = packet.socket.EndReceive(ar);
            // 已断开连接
            if (read < 1)
            {
                // 通知丢失连接
                handler.OnLost(packet);
                return;
            }
            packet.readLength += read;

            // 消息体必须读满指定的长度
            if (packet.readLength < packet.bodyLenght)
            {
                packet.socket.BeginReceive(packet.bytes,
                    NetPacket.headerLength + packet.readLength,
                    packet.bodyLenght - packet.readLength,
                    SocketFlags.None,
                    new AsyncCallback(ReceiveBody),
                    packet);
            }
            else
            {
                // 将消息传入到逻辑处理队列
                msgDispatch.AddPacket(packet);
                

                // 下一个读取
                packet.Reset();
                packet.socket.BeginReceive(packet.bytes,
                    0,
                    NetPacket.headerLength,
                    SocketFlags.None,
                    new AsyncCallback(ReceiveHeader),
                    packet);
            }
        }
        catch (Exception ex)
        {
            handler.OnError("ReceiveBody", ex);
        }
    }

    // 向远程发送消息
    public void Send(Socket sk, NetPacket packet)
    {
        NetworkStream ns;
        lock (sk)
        {
            ns = new NetworkStream(sk);
            if (ns.CanWrite)
            {
                try
                {
                    ns.BeginWrite(packet.bytes, 0, packet.Length, new System.AsyncCallback(SendCallback), ns);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
    }

    //发送回调
    private void SendCallback(System.IAsyncResult ar)
    {
        NetworkStream ns = (NetworkStream)ar.AsyncState;
        try
        {
            ns.EndWrite(ar);
            ns.Flush();
            ns.Close();
        }
        catch (System.Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }

    // 向NetworkManager对象发送消息，如连接失败，连接成功等。
    private void WriteMsg(string msg, Socket sk)
    {
        // 通知丢失连接
        NetPacket p = new NetPacket();
        p.socket = sk;
        p.BeginWrite(msg);
        networkMgr.AddPacket(p);
    }
}
