using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Assets.Scripts.Handler
{   
    /// <summary>
    /// handler 元信息
    /// </summary>
    public class HandlerMeta
    {
        /// <summary>
        /// 消息类型
        /// </summary>
        public Type msgType;

        /// <summary>
        /// 执行都实例
        /// </summary>
        public Object instance;

        /// <summary>
        /// 执行方法
        /// </summary>
        public MethodInfo method;
    }
}
