package com.su.common.obj;

import com.alibaba.fastjson.annotation.JSONField;

public class Role {
	/**
	 * 角色id
	 * */
	private int rid;
	/**
	 * 当前经验
	 * */
	private int currExp;
	/**
	 * 有效类型 0：永久，1：过期时间，2：过期局数，
	 * */
	private int effType;
	private long effValue;
	
	/**
	 * 角色是否有效
	 * */
	@JSONField(serialize = false)
	public boolean isEff() {
		if (effType == 0)
			return true;
		if (effValue > 0)
			return true;
		return false;
	}
	
	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
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
