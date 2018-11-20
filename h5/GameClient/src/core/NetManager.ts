import GameCtx from "./GameCtx";

export default class NetManager {
    // 连接对象
    socket: Laya.Socket;
    private byte: Laya.Byte;
    // 所有回调
    private map;
    // 创建 socket 连接
    connection(): void {
        this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket.connect("localhost", 8989);
        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
    }

    // 发送消息
    send(name: string, msg: any): void {
        if (!this.socket.connected) {
            // TODO 未连接
            return;
        }
        // 消息对象转换成字节数组
        let MsgType = GameCtx.protoMgr.root.lookup(name);
        let comMsg = MsgType.create(msg);

        let errMsg = MsgType.verify(comMsg);
        if (errMsg)
            throw Error(errMsg);
        var buffer:any = MsgType.encode(comMsg).finish();

        // 组装协议
        this.byte.clear();
        this.byte.writeInt32(0);
        this.byte.writeInt32(name.length);
        this.byte.writeUTFBytes(name);
        this.byte.writeInt32(msg.length);
        this.byte.writeArrayBuffer(buffer);
        this.byte.pos = 0;
        this.byte.writeInt32(this.byte.length - 4);

        // 发送协议
        this.socket.send(this.byte.buffer);
    }

    // 添加消息响应
    addCall(name: string, listener: Function): void {
        let list = this.map[name];
        if (!list) {
            list = [];
        } else {
            // 是否包含在集合中
            let isContain;
            for (let fn of list) {
                if (fn === listener)
                    return;
            }
        }
        list[list.length + 1] = listener;
        
    }
    

    private openHandler(event: any = null): void {
        //正确建立连接
    }
    private receiveHandler(msg: any = null): void {
        ///接收到数据触发函数
        this.byte.writeArrayBuffer(msg);
        let oldPos = this.byte.pos;
        if (this.byte.length >= 4) {
            let totalLen = this.byte.getInt32();
            if (this.byte.length - this.byte.pos >= totalLen) {
                // 读取数据
                let nameLen = this.byte.getInt32();
                let name = this.byte.getUTFBytes(nameLen);
                let dataLen = this.byte.getInt32();
                let data = this.byte.getUint8Array(this.byte.pos, dataLen);
                this.byte.clear();
                // 回调
                let list = this.map[name];
                if (list) {
                    for (let fn of list) {
                        // 字节数组转换成对象
                        let MsgType = GameCtx.protoMgr.root.lookup(name);
                        let comMsg = MsgType.decode(data);
                        fn(comMsg)
                    }
                }
            } else {
                this.byte.pos = oldPos;
            }
        }
    }
    private closeHandler(e: any = null): void {
        //关闭事件
    }
    private errorHandler(e: any = null): void {
        //连接出错
        
    }
}