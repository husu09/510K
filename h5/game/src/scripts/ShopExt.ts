import { ui } from "./../ui/layaMaxUI";
import Event = Laya.Event;
import Scene = Laya.Scene;
import Image = Laya.Image;
import Button = Laya.Button;
import Handler = Laya.Handler;
export default class ShopExt extends ui.ShopUI {

    data = {
        diamond: {img: "common/shop/Img_zuan_213.png" , list: [{item: 10, price: 1}, {item: 50, price: 5}, {item: 200, price: 20}, {item:500, price: 50}]},
        peanut: {img: "common/shop/Img_dou_203.png" , list: [{item: 10000, price: 10}, {item: 50000, price: 50}, {item: 100000, price: 100}]},
        note: {img: "common/shop/huode_jishiqi.png" , list: [{item: 20, price: 10}, {item: 100, price: 50}, {item: 200, price: 1000}]},
        double: {img: "common/shop/30020001.png" , list: [{item: 20, price: 10}, {item: 100, price: 50}, {item: 200, price: 1000}]}
        };
    // 当前索引
    currIndex = 0;
    // 商店类型
    type;

    constructor(type: string) {
        super();
        this.type = type;
    }

    onAwake(): void {
        // 加载图片
        let imgs = [];
        for (let key in this.data) {
            imgs.push(this.data[key].img);
        }
        console.log(imgs);
        Laya.loader.load(imgs, Handler.create(this, ()=> {
            // 设置图片
            let img = this.data[this.type].img;
            let textTure = Laya.loader.getRes(img);
            console.log(textTure);
            this.iconImg.texture = textTure;
        }));
        
        
        
        this.changeItem(0);

        this.leftBtn.on(Event.CLICK, this, this.changeItem, [-1]);
        this.rightBtn.on(Event.CLICK, this, this.changeItem, [1]);
        this.leftBtn.disabled = true;
    }
    

    changeItem(offset: number): void {
        let index = this.currIndex + offset;
        let list = this.data[this.type].list;
        if (index < 0 || index > list.length - 1 ) {
            return;
        }
        this.currIndex = index;

        // 价格文本
        this.itemLeb.text = "x " + list[index].item;
        if (this.type == "diamond") {
            this.diamondImg.visible = false;
            this.priceLab.text = "￥ " + list[index].price;
        } else {
            this.diamondImg.visible = true;
            let price = list[index].price + "";
            this.priceLab.text = "x " + price;

            if (price.length > 3) 
                this.priceLab.fontSize = 25;
            else 
                this.priceLab.fontSize = 30;
        }

        // 左右按钮状态
        if (this.currIndex == 0) {
            this.leftBtn.disabled = true;
        } else if (this.currIndex == list.length - 1) {
            this.rightBtn.disabled = true;
        } else {
            if (this.leftBtn.disabled)
                this.leftBtn.disabled = false;
            if (this.rightBtn.disabled)
                this.rightBtn.disabled = false;
        }
    }
}