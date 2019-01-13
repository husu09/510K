import DataMgr from "./DataMgr";
import MsgMgr from "./MsgMgr";
import NetMgr from "./NetMgr";

export default class Ctx {
    
    /** 消息管理 */
    static msgMgr: MsgMgr = new MsgMgr();
    /** 数据管理 */
    static dataMgr: DataMgr = new DataMgr();
    /** 连接管理 */
    static netMgr: NetMgr = new NetMgr();

    /** 预加载资源 */
    static assets = [
        "res/atlas/common.atlas",
        "res/atlas/common/game.atlas",
        "res/atlas/common/shop.atlas",
    ];

    /** 配置 */
    static conf = [
        "res/conf/Paramter.json",
    ];

    static getAllAssets(): any {
        return Ctx.assets.concat(Ctx.conf);
    }
    
}