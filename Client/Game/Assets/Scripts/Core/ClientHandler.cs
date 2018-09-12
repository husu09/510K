using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using UnityEngine;

namespace Assets.Scripts.Core
{
    class ClientHandler : IClientHandler
    {
        public void OnConnected(Socket socket)
        {
            Debug.Log("connected...");
        }

        public void OnConnectFailed(Exception ex)
        {
            Debug.Log("connectFailed... " + ex.Message);
        }

        public void OnConnectFailed(Socket socket, Exception ex)
        {
            Debug.Log("connectFailed... " + ex.Message);
        }

        public void OnError(string name, Exception ex)
        {
            Debug.Log("name... " + ex.Message);
        }

        public void OnLost(NetPacket packet)
        {
            Debug.Log("lost... ");
        }
    }
}
