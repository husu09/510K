using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.Data
{
    [AttributeUsage(AttributeTargets.Method)]
    public class DataAtt : Attribute
    {
        private readonly DataType dataType;

        public DataType DataType {
            get {
                return dataType;
            }
        }

        public DataAtt(DataType dataType) {
            this.dataType = dataType;
        }
    }
}
