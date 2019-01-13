import { ui } from "./../ui/layaMaxUI";
import Event = Laya.Event;
import Scene = Laya.Scene;
import Image = Laya.Image;
import Button = Laya.Button;
import Handler = Laya.Handler;
import ShopExt from "./ShopExt";
import GameExt from "./GameExt";
export default class MainExt extends ui.MainUI {
    onAwake(): void {
        this.addBeanBtn.on(Event.CLICK, this, this.showShop, ["peanut"]);
        this.addDiamondBtn.on(Event.CLICK, this, this.showShop, ["diamond"]);
        this.oneSiteBtn.on(Event.CLICK, this, this.showGame, ["one"]);
    }

    showShop(type): void {
        let shopExt = new ShopExt(type);
        shopExt.popup();
    }

    showGame(type): void {
        // let gameExt = new GameExt(type);
        // gameExt.open();
    }
}