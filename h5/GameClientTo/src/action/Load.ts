export default class Load extends Laya.Script {
    onEnable(): void {
        Laya.timer.once(5000, this, () => {
            //Laya.Scene.open("Load.scene")
        });
    }
}