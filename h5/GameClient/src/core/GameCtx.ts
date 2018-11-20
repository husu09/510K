import NetManager from "./NetManager";
import ProtoManager from "./ProtoManager";

export default class GameCtx {
    // 网络管理类
    static netMgr: NetManager = new NetManager();
    // 协议管理类
    static protoMgr: ProtoManager = new ProtoManager();
}