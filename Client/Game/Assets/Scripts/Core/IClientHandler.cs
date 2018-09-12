using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
namespace Assets.Scripts.Core
{
    public interface IClientHandler
    {
        // 处理客户端取得与服务器连接失败
        void OnConnectFailed(Exception ex);
        void OnConnectFailed(Socket socket, Exception ex);

        // 处理客户端取得与服务器的连接
        void OnConnected(Socket socket);

        // 处理丢失连接
        void OnLost(NetPacket packet);

        // 其它异常
        void OnError(string name, Exception ex);
    }
}