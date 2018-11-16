using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.Handler
{   
    /// <summary>
    /// handler 扫描类，启动时扫描注册所有 handler
    /// </summary>
    public class HandlerScan
    {
        public static void Scan()
        {
            Type[] types = Assembly.GetExecutingAssembly().GetTypes();
            foreach (Type type in types)
            {
                object obj = null;
                if (type.Namespace != null && !type.Namespace.Equals("Assets.Scripts.Handler"))
                {
                    continue;
                }
                MethodInfo[] methods = type.GetMethods();
                foreach (MethodInfo method in methods)
                {
                    // 实现 HandlerAtt 的方法
                    object[] attrs = method.GetCustomAttributes(typeof(HandlerAtt), false);
                    if (attrs != null && attrs.Length > 0)
                    {
                        try
                        {
                            if (obj == null)
                                obj = Activator.CreateInstance(type);
                            // 创建 handler 元信息
                            HandlerMeta meta = new HandlerMeta();
                            meta.instance = obj;
                            meta.method = method;
                            ParameterInfo p = method.GetParameters()[0];
                            meta.msgType = p.ParameterType;
                            // 添加到 handler 分发器
                            HandlerDispatch.Dispatch.addMeta(meta);
                        }
                        catch (Exception ex) {
                            Debug.LogError(ex.Message);
                        }
                    }
                }

            }
        }
    }
}
