import { ui } from "./../ui/layaMaxUI";
import NetMgr from "../core/NetMgr";
import Ctx from "../core/Ctx";
import Loader  = Laya.Loader;
import Handler = Laya.Handler;
import Color = Laya.Color;
import Sprite = Laya.Sprite;
import Event = Laya.Event;
import Player from "../data/Player";
export default class LoadExt extends ui.LoadUI {
    


    onAwake(): void {
        // 注册协议
        Ctx.msgMgr.reg("LoginTo", this.loginToAct);
        Ctx.msgMgr.reg("TestTo", this.testToAct);

        // 背景颜色
        Laya.stage.bgColor = "#FFFFFF";

        this.loadImg.timer.loop(10, this , ()=> {
            this.loadImg.rotation = this.loadImg.rotation + 1;
        });

        // 连接到服务器
        Ctx.netMgr.connect("ws://localhost:8080/websocket", ()=> {
            
            // 加载资源
            var assets = Ctx.getAllAssets();
            Laya.loader.load(assets, new Handler(this, this.loadComplete), new Handler(this, this.loadProgress)); 
        });
        
    }

    loadComplete(flag): void {
        if (!flag) {
            console.log("load assets is not all success")
        }
        let img = Laya.loader.getRes("common/shop/Img_zuan_213.png");
        
        let login = Msg.Login.create();
        login.account = "10001";
        Ctx.netMgr.send("Login", login);

    }

    loadProgress(num): void {
        this.numTxt.text = (num * 100).toFixed(0)+ "%";
    }

    loginToAct(msg: Msg.LoginTo): void  {
        Player.syncData(msg.player);
        
    }

    testToAct(msg: Msg.TestTo): void {

    }

}