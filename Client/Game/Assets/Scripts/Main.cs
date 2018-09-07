using ProtoBuf;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class Main : MonoBehaviour {

    delegate void OnRecive(IExtensible msg);


	// Use this for initialization
	void Start () {
        Login login = new Login();
        login.Name = "胡苏";
        login.Account = "husu";
        byte[] bytes = null;
        using (MemoryStream ms = new MemoryStream())
        {
            Serializer.Serialize<Login>(ms, login);
            bytes = new byte[ms.Length];
            ms.Position = 0;
            ms.Read(bytes, 0, bytes.Length);
        }

        Debug.Log(bytes);

        using (MemoryStream ms = new MemoryStream())
        {
            //将消息写入流中  
            ms.Write(bytes, 0, bytes.Length);
            //将流的位置归0  
            ms.Position = 0;
            //使用工具反序列化对象  

            login = (Login)Serializer.Deserialize(login.GetType(), ms);
            Debug.Log(login.GetType().Name);
            //login = Serializer.Deserialize<Login>(ms);
            Debug.Log(login.Account);
            Debug.Log(login.Name);

            OnRecive recive = new OnRecive(Recive);

            recive(login);
        }

        
    }

    void Recive(IExtensible msg) {
        Debug.Log(msg.ToString());
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
