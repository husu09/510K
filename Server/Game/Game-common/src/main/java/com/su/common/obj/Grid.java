package com.su.common.obj;

/**
 * 物品格子
 * */
public class Grid {
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
	/**
	 * 有效类型
	 * */
	private int effType;
	/**
	 * 有效值
	 * */
	private long effValue;
	
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
	public long getEffValue() {
		return effValue;
	}
	public void setEffValue(long effValue) {
		this.effValue = effValue;
	}
	public int getEffType() {
		return effType;
	}
	public void setEffType(int effType) {
		this.effType = effType;
	}
	
}
