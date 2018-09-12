using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.Handler
{   
    /// <summary>
    /// 特性，标识处理后端协议的方法
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public class HandlerAtt : Attribute
    {
    }
}
