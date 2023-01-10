/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GameExt from "./scripts/GameExt"
import GameSct from "./scripts/GameSct"
import LoadExt from "./scripts/LoadExt"
import MainExt from "./scripts/MainExt"
import ShopExt from "./scripts/ShopExt"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1136;
    static height:number=640;
    static scaleMode:string="showall";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="Load.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("scripts/GameExt.ts",GameExt);
        reg("scripts/GameSct.ts",GameSct);
        reg("scripts/LoadExt.ts",LoadExt);
        reg("scripts/MainExt.ts",MainExt);
        reg("scripts/ShopExt.ts",ShopExt);
    }
}
GameConfig.init();