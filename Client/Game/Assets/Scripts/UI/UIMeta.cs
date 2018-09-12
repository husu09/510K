using Assets.Scripts.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Assets.Scripts.UI
{
    public class UIMeta
    {
        /// <summary>
        /// 对应的数据类型
        /// </summary>
        public DataType DataType { get; set; }
        
        /// <summary>
        /// 执行方法
        /// </summary>
        public MethodInfo Method { get; set; }

        /// <summary>
        /// 执行实例
        /// </summary>
        public object Instance { get; set; }
    }
}
