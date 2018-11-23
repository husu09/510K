export default class Main extends Laya.Script {

    private shootAni: Laya.Animation;

    
    /**
     * 创建一组动画的url数组（美术资源地址数组）
     * aniName  动作的名称，用于生成url
     * length   动画最后一帧的索引值，
     */    
    private aniUrls(aniName: string, length: number): any{
        var urls: any = [];
        for(var i: number = 0; i < length; i++){
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push("shoot/" + aniName + i + ".png");
        }
        return urls;
    }

    onEnable(): void {
        Laya.Mouse.hide();
        //创建动画实例
        this.shootAni = new Laya.Animation();
        this.shootAni.interval = 250
        // this.shootAni.pivotX = 10.5;
        // this.shootAni.pivotY = 10.5;
        //加载动画图集，加载成功后执行回调方法
        this.shootAni.loadAtlas("res/atlas/shoot.atlas", Laya.Handler.create(this, () => {
            //添加到舞台
            this.owner.addChild(this.shootAni);
            this.shootAni.loadImages(this.aniUrls("1crosshair", 2), "1crosshair");
            this.shootAni.play(0, true, "1crosshair");

            // let t = Laya.loader.getRes("shoot/coin2.png");
            // let ape = new Laya.Sprite();
            // ape.graphics.clipRect(0, 0, 16, 16 );
            // ape.graphics.drawTexture(t, -16, 0);
            // this.owner.addChild(ape);
            
            // ape.scaleX = 2;
            // ape.scaleY = 2;
            // ape.pos(100, 100);

            let t = Laya.loader.getRes("shoot/coin2.png");
            let ape = new Laya.Sprite();
            this.owner.addChild(ape);
            ape.scaleX = 2;
            ape.scaleY = 2;
            ape.pos(100, 100);

            let i = 0;
            Laya.timer.loop(200, this, function() {
                console.log(i);
                ape.graphics.clear();
                ape.graphics.clipRect(0, 0, 16, 16);
                ape.graphics.drawTexture(t, -(i * 16), 0);
                
                i++;
                if (i > 7)
                    i = 0;
            });
            

        }));
        
    }

    onMouseMove(e): void {
        this.shootAni.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }

    

    onClick(): void {
        
    }
}