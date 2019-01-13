import Byte = Laya.Byte;
export default class MsgMgr {

    /** 响应 */
    msgMap = {};
    byte: Byte;

    constructor() {
        this.byte = new Byte();
        this.byte.endian = Byte.LITTLE_ENDIAN;
    }

    /** 注册协议 */
    reg(msgName, fn): void {
        if ( !msgName || !fn) {
            console.error("reg error parameter");
            return;
        }
        if (!Msg[msgName]) {
            console.error("reg error " +  msgName);
            return;
        }
        if (!this.msgMap[msgName]) {
            this.msgMap[msgName] = []
        }
        this.msgMap[msgName].push(fn);
    }

    /** 编码协议 */
    encode(msgName: string, buffer: Uint8Array): ArrayBuffer {
        this.byte.clear();
        this.byte.writeInt32(0);
        this.byte.writeInt32(msgName.length);
        this.byte.writeUTFBytes(msgName);
        this.byte.writeInt32(buffer.length);
        this.byte.writeArrayBuffer(buffer);
        this.byte.pos = 0;
        this.byte.writeInt32(this.byte.length - 4);
        return this.byte.buffer;
    }

    /** 解码协议 */
    decode(msgName: string, buffer: Uint8Array) {
        if (!Msg[msgName]) {
            console.error("decode error " +  msgName);
            return;
        }
        let msg = Msg[msgName].decode(buffer);
        if (!msg) {
            console.error("decode error parser " +  msgName);
            return;
        }
        // 响应
        if (this.msgMap[msgName]) {
            let fns = this.msgMap[msgName];
            for (let i = 0; i < fns.length; i++) {
                fns[i](msg);
            }
        }
    }

}