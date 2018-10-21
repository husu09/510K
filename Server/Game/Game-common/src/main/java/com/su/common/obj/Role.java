package com.su.common.obj;

public class Role {
	/**
	 * 角色id
	 * */
	private int cid;
	/**
	 * 当前经验
	 * */
	private int currExp;
	/**
	 * 类型 1：过期时间，2：过期局数，3：永久
	 * */
	private int effType;
	private long effValue;
	
	/**
	 * 角色是否有效
	 * */
	public boolean isEff() {
		if (effType == 1)
			return true;
		if (effValue > 0)
			return true;
		return false;
	}
	
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public int getCurrExp() {
		return currExp;
	}
	public void setCurrExp(int currExp) {
		this.currExp = currExp;
	}
	public int getEffType() {
		return effType;
	}
	public void setEffType(int effType) {
		this.effType = effType;
	}
	public long getEffValue() {
		return effValue;
	}
	public void setEffValue(long effValue) {
		this.effValue = effValue;
	}
	
	
}
