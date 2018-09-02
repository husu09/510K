using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Test {

    public Test() {
        Debug.Log("Test");
        Dictionary<string, string> map = new Dictionary<string, string>();
        map.Add("name", "超越");
        map.Add("age", "18");
        map.Add("gradle", "man");
        string json = JsonConvert.SerializeObject(map);
        Debug.Log(json);
    }
}
