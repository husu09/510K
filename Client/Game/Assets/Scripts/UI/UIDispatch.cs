using Assets.Scripts.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.UI
{   
    /// <summary>
    /// UIService 分发器
    /// </summary>
    public class UIDispatch
    {
        public static UIDispatch Dispatch = new UIDispatch();

        private UIDispatch() { }

        private Dictionary<DataType, List<UIMeta>> uiServices = new Dictionary<DataType, List<UIMeta>>();

        /// <summary>
        /// 添加 UIService 元信息
        /// </summary>
        public void addMeta(UIMeta meta) {
            List<UIMeta>  list = null;
            uiServices.TryGetValue(meta.DataType, out list);
            if (list == null) {
                list = new List<UIMeta>();
                uiServices.Add(meta.DataType, list);
            }
            list.Add(meta);
            Debug.Log("加载 UIService " + meta.DataType);
        }

        /// <summary>
        /// 获取 UIService 元信息
        /// </summary>
        public List<UIMeta> getMetas(DataType dataType) {
            List<UIMeta> list = null;
            uiServices.TryGetValue(dataType, out list);
            return list;
        }


    }
}
