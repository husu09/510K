using Assets.Scripts.Handler;
using ProtoBuf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.Core
{
    public class MsgDispatch
    {
        public static MsgDispatch Dispatch = new MsgDispatch();

        private MsgDispatch() { }

        // 存储网络数据的队列
        private Queue<object> msgs = new Queue<object>();


        // 将数据包入队，然后在Update函数中使用GetPacket获得数据包。
        // 因为网络和逻辑处理有可能是在不同的线程中，所以在入队出队的时候使用了lock防止多线程带来的问题。
        public void AddMsg(object msg)
        {
            lock (msgs)
            {
                msgs.Enqueue(msg);
            }
        }

        // 数据包出队
        public object GetMsg()
        {
            lock (msgs)
            {
                if (msgs.Count == 0)
                    return null;
                return msgs.Dequeue();
            }
        }

        public void Update()
        {
            object msg = null;
            for (msg = GetMsg(); msg != null;)
            {

                HandlerMeta meta = HandlerDispatch.Dispatch.getMeta(msg.GetType().Name);
                try
                {
                    meta.method.Invoke(meta.instance, new object[] { msg });
                }
                catch (Exception ex)
                {
                    Debug.LogError("执行 handler 出错 " + ex.Message);
                }


                msg = GetMsg();
            }
        }
    }
}