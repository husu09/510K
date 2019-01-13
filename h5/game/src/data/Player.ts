import Ctx from "../core/Ctx";



export default class Player extends Msg.PlayerMo {
 
    static syncData(msg: Msg.IPlayerMo) {
        if (!msg)
            return;
        if (msg.hasOwnProperty("id"))
            Ctx.dataMgr.player.id = msg.id;
        if (msg.hasOwnProperty("account"))
            Ctx.dataMgr.player.account = msg.account;
        if (msg.hasOwnProperty("avatar"))
            Ctx.dataMgr.player.avatar = msg.avatar;
        if (msg.hasOwnProperty("name"))
            Ctx.dataMgr.player.name = msg.name;
        if (msg.hasOwnProperty("gender"))
            Ctx.dataMgr.player.gender = msg.gender;
        if (msg.hasOwnProperty("bean"))
            Ctx.dataMgr.player.bean = msg.bean;
        if (msg.hasOwnProperty("diamond"))
            Ctx.dataMgr.player.diamond = msg.diamond;
        Ctx.dataMgr.resp("player");
    }
}