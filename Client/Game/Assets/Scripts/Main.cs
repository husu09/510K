using Assets.Scripts.Core;
using Assets.Scripts.Handler;
using Assets.Scripts.Proto;
using Assets.Scripts.UI;
using ProtoBuf;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace Assets.Scripts
{
    public class Main : MyBehaviour
    {

        private Client client = null;
        private bool isSend = false;


        // Use this for initialization
        void Start()
        {
            HandlerScan.Scan();
            UIScan.Scan();
            client = new Client();
            client.Connect("127.0.0.1", 8080);
        }


        // Update is called once per frame
        void Update()
        {
            if (client != null && client.GetStatus() == ClientStatus.CONNECTED && isSend == false) {
                Login login = new Login();
                login.Account = "husu";
                login.Name = "husu";
                client.Send(login);
                isSend = true;
            }
            MsgDispatch.Dispatch.Update();
        }
    }
}
