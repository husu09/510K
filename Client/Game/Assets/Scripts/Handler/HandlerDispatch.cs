using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.Handler
{   
    /// <summary>
    /// handler 分发器，管理所有的 handler
    /// </summary>
    public class HandlerDispatch
    {
        public static HandlerDispatch Dispatch = new HandlerDispatch();

        private HandlerDispatch() { }

        private Dictionary<string, HandlerMeta> handlerMap = new Dictionary<string, HandlerMeta>();

        /// <summary>
        /// 添加 handler
        public void addMeta(HandlerMeta meta) {
            string name = meta.msgType.Name;
            if (handlerMap.ContainsKey(name)) {
                Debug.LogError("重复的 handlerMeta " + name);
                return;
            }
            Debug.Log("加载 handler " + name);
            handlerMap.Add(name, meta);
        }

        /// <summary>
        /// 获取 handler
        /// </summary>
        public HandlerMeta getMeta(string key) {
            HandlerMeta meta = null;
            handlerMap.TryGetValue(key, out meta);
            return meta;
        }
    }
}
