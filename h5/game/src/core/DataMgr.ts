import Player from "../data/Player";

export default class DataMgr {
    /** 响应 */
    dataFnMap = {};

    player: Player = new Player();

    /** 注册协议 */
    reg(dataName, fn): void {
        if ( !dataName || !fn) {
            console.error("dataReg error parameter");
            return;
        }
        if (!this.dataFnMap[dataName]) {
            this.dataFnMap[dataName] = []
        }
        this.dataFnMap[dataName].push(fn);
    }

    /** 更新 */
    resp(dataName): void {
        if (this.dataFnMap[dataName]) {
            let fns = this.dataFnMap[dataName];
            for (let i = 0; i < fns.length; i++) {
                fns[i](DataMgr[dataName]);
            }
        }

    }
} 