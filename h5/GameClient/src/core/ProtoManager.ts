import Loader = Laya.Loader;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
    
export default class ProtoManager {
    private ProtoBuf:any = Browser.window.protobuf;
    root: any;

    init(): void {
        let arr = [
            "res/protobuf/user.proto",
        ]
        // 加载协议
        this.ProtoBuf.load(arr, this.onAssetsLoaded);
    }

    private onAssetsLoaded(err:any, root:any):void
    {
        if (err)
            throw err;
        this.root = root;
    }
}