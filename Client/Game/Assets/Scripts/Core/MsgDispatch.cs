using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class MsgDispatch
{
    // 存储网络数据的队列
    private Queue<NetPacket> packets = new Queue<NetPacket>();

    /// <summary>
    /// 代理回调函数
    /// </summary>
    public delegate void OnReceive(NetPacket packet);

    // 每个消息对应一个OnReceive函数
    public Dictionary<string, OnReceive> handlers;

    // 注册网络消息
    // 将字符串形式的消息标识符和回调函数以键值对应的方式存入到一个Dictionary中
    public void AddHandler(string msgid, OnReceive handler)
    {
        handlers.Add(msgid, handler);
    }

    // 将数据包入队，然后在Update函数中使用GetPacket获得数据包。
    // 因为网络和逻辑处理有可能是在不同的线程中，所以在入队出队的时候使用了lock防止多线程带来的问题。
    public void AddPacket(NetPacket packet)
    {
        lock (packets)
        {
            packets.Enqueue(packet);
        }
    }

    // 数据包出队
    public NetPacket GetPacket()
    {
        lock (packets)
        {
            if (packets.Count == 0)
                return null;
            return packets.Dequeue();
        }
    }

    public void Update()
    {
        NetPacket packet = null;
        for (packet = GetPacket(); packet != null;)
        {
            string msg = "";
            // 获得消息标识符
            packet.BeginRead(out msg);

            OnReceive handler = null;
            if (handlers.TryGetValue(msg, out handler))
            {
                // 根据消息标识符找到相应的OnReceive代理函数
                if (handler != null)
                    handler(packet);
            }
            // 继续获得其它的包
            packet = GetPacket();
        }
    }
}
