using Assets.Scripts.Handler;
using Assets.Scripts.Proto;
using ProtoBuf;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.Core
{
    public class Client
    {

        // 事件处理
        private IClientHandler handler = new ClientHandler();
        // 接收数据包
        private NetPacket rPacket = new NetPacket();
        // 发送数据包
        private NetPacket sPacket = new NetPacket();
        // 连接对象
        private Socket socket = null;

        private ClientStatus status = ClientStatus.UNCONNECTED;


        public Client()
        {
        }

        // 获取客户端状态
        public ClientStatus GetStatus()
        {
            return status;
        }


        // 作为客户端，开始异步连接服务器
        public void Connect(string ip, int port)
        {
            IPEndPoint ipe = new IPEndPoint(IPAddress.Parse(ip), port);
            try
            {
                socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
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
            Socket socket = (Socket)ar.AsyncState;
            try
            {
                // 与服务器取得连接
                socket.EndConnect(ar);

                // 通知已经成功连接到服务器
                handler.OnConnected(socket);

                // 开始异步接收服务器信息
                socket.BeginReceive(rPacket.bytes, 0, NetPacket.headerLength, SocketFlags.None, new AsyncCallback(ReceiveHeader), socket);
                status = ClientStatus.CONNECTED;
            }
            catch (Exception ex)
            {
                handler.OnConnectFailed(socket, ex);
            }
        }

        // 接收数据主要是通过ReceiveHeader和ReceiveBody两个函数。
        void ReceiveHeader(IAsyncResult ar)
        {
            try
            {
                // 返回网络上接收的数据长度
                int read = socket.EndReceive(ar);
                // 已断开连接
                if (read < 1)
                {
                    // 通知丢失连接
                    handler.OnLost(rPacket);
                    return;
                }

                rPacket.readLength += read;
                // 消息头必须读满4个字节
                if (rPacket.readLength < NetPacket.headerLength)
                {
                    socket.BeginReceive(rPacket.bytes,
                        rPacket.readLength,                          // 存储偏移已读入的长度
                        NetPacket.headerLength - rPacket.readLength, // 这次只读入剩余的数据
                        SocketFlags.None,
                        new AsyncCallback(ReceiveHeader),
                        rPacket);
                }
                else
                {
                    // 获得消息体长度
                    rPacket.DecodeHeader();

                    rPacket.readLength = 0;
                    // 开始读取消息体
                    socket.BeginReceive(rPacket.bytes,
                        NetPacket.headerLength,
                        rPacket.bodyLenght,
                        SocketFlags.None,
                        new AsyncCallback(ReceiveBody),
                        rPacket);
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

            try
            {
                // 返回网络上接收的数据长度
                int read = socket.EndReceive(ar);
                // 已断开连接
                if (read < 1)
                {
                    // 通知丢失连接
                    handler.OnLost(rPacket);
                    return;
                }
                rPacket.readLength += read;

                // 消息体必须读满指定的长度
                if (rPacket.readLength < rPacket.bodyLenght)
                {
                    socket.BeginReceive(rPacket.bytes,
                        NetPacket.headerLength + rPacket.readLength,
                        rPacket.bodyLenght - rPacket.readLength,
                        SocketFlags.None,
                        new AsyncCallback(ReceiveBody),
                        rPacket);
                }
                else
                {
                    // 将消息传入到逻辑处理队列
                    string msgName = "";
                    rPacket.BeginRead(out msgName);
                    HandlerMeta meta = HandlerDispatch.Dispatch.getMeta(msgName);
                    if (meta != null)
                    {
                        object msg = rPacket.ReadObject(meta.msgType);
                        MsgDispatch.Dispatch.AddMsg(msg);
                    }
                    else {
                        Debug.LogError("没有找到对应的 handler " + msgName );
                    }
                    
                    // 下一个读取
                    rPacket.Reset();
                    socket.BeginReceive(rPacket.bytes,
                        0,
                        NetPacket.headerLength,
                        SocketFlags.None,
                        new AsyncCallback(ReceiveHeader),
                        rPacket);
                }
            }
            catch (Exception ex)
            {
                handler.OnError("ReceiveBody", ex);
            }
        }

        // 向远程发送消息
        public void Send(object msg)
        {
            NetworkStream ns;
            lock (socket)
            {
                ns = new NetworkStream(socket);
                if (ns.CanWrite)
                {
                    try
                    {
                        string msgName = msg.GetType().Name;
                        sPacket.BeginWrite(msgName);
                        sPacket.WriteObject(msg);
                        sPacket.EncodeHeader();
                        ns.BeginWrite(sPacket.bytes, 0, sPacket.Length, new AsyncCallback(SendCallback), ns);
                    }
                    catch (Exception ex)
                    {
                        handler.OnError("Send", ex);
                    }
                }
            }
        }

        //发送回调
        private void SendCallback(IAsyncResult ar)
        {
            NetworkStream ns = (NetworkStream)ar.AsyncState;
            try
            {
                ns.EndWrite(ar);
                ns.Flush();
                ns.Close();
                Debug.Log("send...");
            }
            catch (Exception ex)
            {
                handler.OnError("SendCallback", ex);
            }
        }
    }
}