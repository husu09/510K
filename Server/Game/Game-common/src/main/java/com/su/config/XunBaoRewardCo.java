package com.su.config;
import com.su.common.obj.Item;
public class XunBaoRewardCo {
	/**id*/
	private int id;
	/**类型*/
	private int type;
	/**物品*/
	private Item item;
	/**概率*/
	private int ratio;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public int getRatio() {
		return ratio;
	}

	public void setRatio(int ratio) {
		this.ratio = ratio;
	}
}