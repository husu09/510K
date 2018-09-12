using Assets.Scripts.Proto;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.Scripts.Handler
{
    public class LoginHandler
    {

        [HandlerAtt]
        public void LoginTo(LoginTo resp)
        {
            Debug.Log(resp.Player.Id);
            Debug.Log(resp.Player.Name);
        }
    }
}