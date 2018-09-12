using Assets.Scripts.Proto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.Data
{
   public class Player : DataSup
    {
        public static PlayerMo Data { get; set; }

        public override DataType GetDataType()
        {
            return DataType.PLAYER;
        }
    }
}
