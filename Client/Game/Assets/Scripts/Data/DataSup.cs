using Assets.Scripts.UI;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.Scripts.Data
{
    public abstract class DataSup
    {
        public abstract DataType GetDataType();


        /// <summary>
        /// 更新 UI
        /// </summary>
        public void updateUI()
        {
            List<UIMeta> list = UIDispatch.Dispatch.getMetas(GetDataType());
            if (list == null) {
                Debug.LogError("未处理的 DataType " + GetDataType());
                return;
            }

            foreach (UIMeta meta in list)
            {
                meta.Method.Invoke(meta.Instance, null);
            }
        }
    }
}
