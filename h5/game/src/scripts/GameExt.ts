
import { ui } from "./../ui/layaMaxUI";
import Event = Laya.Event;
import Scene = Laya.Scene;
import Image = Laya.Image;
import Button = Laya.Button;
import Handler = Laya.Handler;
import Sprite = Laya.Sprite;
import Pool = Laya.Pool;
import GameSct from "./GameSct";
export default class GameExt extends ui.GameUI {
    
    private gameSct: GameSct;
    constructor() {
        super();
    }

    onAwake(): void {
        this.gameSct = this.getComponent(GameSct);
        
        this.startBtn.clickHandler = new Handler(this, this.start);
    }

    start(): void {
        // let card: Sprite = Pool.getItemByCreateFun("card", this.gameSct.cardPfb.create, this.gameSct.cardPfb);
        // card.pos(Math.random() * (Laya.stage.width - 100), 0);
        // this.box.addChild(card);

        let map = {}
        for (let property in Msg) {
            if (typeof Msg[property] == 'function') {
                map[property] = Msg[property]
            }
        }
        if (map["Login"]) {
            let login = new map["Login"]();
            console.log(login);
        }


        let msgname = "Login";

        let login = Msg[msgname].create();
        login.account = "123";
        login.name = "abc";
        let buf = Msg.Login.encode(login).finish();
        
        let byte = new Laya.Byte();
        byte.writeInt32(0);
        byte.writeInt32(4);
        byte.writeUTFBytes("Login");
        byte.writeInt32(buf.length);
        byte.writeArrayBuffer(buf);
        byte.writeUTFString("");
        byte.pos = 0;
        byte.writeInt32(byte.length);

        console.log(byte.buffer);

        byte.pos = 0;
        let totalLen = byte.getInt32();
        let strLen = byte.getInt32();
        let name = byte.getUTFBytes(strLen);
        let msgLen = byte.getInt32();
        let msg = byte.readUint8Array(byte.pos, msgLen);

        console.log(totalLen);
        console.log(strLen);
        console.log(name);
        console.log(msgLen);
        console.log(msg);








        

        let nlogin = Msg.Login.decode(buf);
        // alert(nlogin.account);
        // alert(nlogin.name);
    }






}