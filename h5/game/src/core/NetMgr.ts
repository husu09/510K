
import Socket = Laya.Socket;
import Byte = Laya.Byte;
import Event = Laya.Event;
import Ctx from "./Ctx";
export default class NetMgr {
    private socket: Socket;
    private callblack;
    private byte: Byte;

    constructor() {
        this.socket = new Socket();
        this.byte = new Byte();
        this.socket.endian = Byte.LITTLE_ENDIAN;
        this.byte.endian = Byte.LITTLE_ENDIAN;
    }

    send(name: string, msg: any): void {
        console.log("send", name);
        let buffer = Msg[name].encode(msg).finish();
        let byteArr = Ctx.msgMgr.encode(name, buffer);
        this.socket.send(byteArr);
    }

    /** 连接到服务器 */
    connect(url, fn): void {
        if (this.socket.connected) {
            return;
        }
        this.callblack = fn;
        
        this.socket.on(Event.OPEN, this, this.openHandler);
        this.socket.on(Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Event.CLOSE, this, this.closeHandler);
        this.socket.on(Event.ERROR, this, this.errorHandler);
        this.socket.connectByUrl(url);
    }

    openHandler(event): void {
        //正确建立连接
        console.log("net success", event);
        this.callblack();
    }

    receiveHandler(data): void {
        //接收到数据触发函数
        this.byte.clear();
        console.log("net receive", data);
        this.byte.writeArrayBuffer(data);
        this.byte.pos = 0;
        let markPos = this.byte.pos;
        let length = this.byte.getInt32();
        if (markPos == this.byte.pos)
            return;
        if (length <= 0) {
            console.error("negative length: ", length);
            return;
        }
        if (this.byte.bytesAvailable < length) {
            this.byte.pos = markPos;
            return;
        }
        let nameLen = this.byte.getInt32();
        let name = this.byte.getUTFBytes(nameLen);
        let dataLen = this.byte.getInt32();
        let arr = this.byte.getUint8Array(this.byte.pos, dataLen);
        Ctx.msgMgr.decode(name, arr);
    }

    closeHandler(event): void {
        //关闭事件
        console.log("net close", event);
    }

    errorHandler(event): void {
        //连接出错
        console.log("net error", event);
    }
}