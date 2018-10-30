package com.su.common.obj;

import com.su.msg.CommonMsg.ItemMo;

/**
 * 物品
 * */
public class Item {
	/**
	 * 类型
	 * */
	private int type;
	/**
	 * 物品id
	 * */
	private int sysId;
	/**
	 * 数量
	 * */
	private int count;
	
	public ItemMo serialize() {
		ItemMo.Builder _reward = ItemMo.newBuilder();
		_reward.setType(type);
		_reward.setSysId(sysId);
		_reward.setCount(count);
		return _reward.build();
	}
	
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getSysId() {
		return sysId;
	}
	public void setSysId(int sysId) {
		this.sysId = sysId;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	
}
