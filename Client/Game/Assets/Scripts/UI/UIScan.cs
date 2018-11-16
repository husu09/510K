using Assets.Scripts.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.UI
{
    public class UIScan
    {
        public static void Scan()
        {
            Type[] types = Assembly.GetExecutingAssembly().GetTypes();
            foreach (Type type in types)
            {
                object obj = null;
                if (type.Namespace != null && !type.Namespace.Equals("Assets.Scripts.UI"))
                {
                    continue;
                }
                MethodInfo[] methods = type.GetMethods();
                foreach (MethodInfo method in methods)
                {
                    // 查找实现 DataAtt 的方法
                    object[] attrs = method.GetCustomAttributes(typeof(DataAtt), false);
                    if (attrs != null && attrs.Length > 0)
                    {
                        try
                        {
                            if (obj == null)
                                obj = Activator.CreateInstance(type);
                            // 创建 handler 元信息
                            DataAtt att = (DataAtt)attrs[0];
                            UIMeta meta = new UIMeta();
                            meta.Instance = obj;
                            meta.Method = method;
                            meta.DataType = att.DataType;
                            // 添加到 handler 分发器
                            UIDispatch.Dispatch.addMeta(meta);
                        }
                        catch (Exception ex)
                        {
                            Debug.LogError(ex.Message);
                        }
                    }
                }

            }
        }
    }
}
