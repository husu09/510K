package com.su.common.po.log;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.su.common.data.Cache;

@Cache(memoryCache=false,redisCache=false)
@Entity
public class PeanutLog {
	@Id
	private long id;
	/**
	 * 玩家id
	 * */
	private long playerId;
	/**
	 * 添加或扣除的操作
	 * */
	private int reason;
	/**
	 * 使用数量
	 * */
	private int useCount;
	/**
	 * 剩余数量
	 * */
	private int leftCount;
	
	public int getReason() {
		return reason;
	}
	public void setReason(int reason) {
		this.reason = reason;
	}
	public int getUseCount() {
		return useCount;
	}
	public void setUseCount(int useCount) {
		this.useCount = useCount;
	}
	public int getLeftCount() {
		return leftCount;
	}
	public void setLeftCount(int leftCount) {
		this.leftCount = leftCount;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getPlayerId() {
		return playerId;
	}
	public void setPlayerId(long playerId) {
		this.playerId = playerId;
	}
}
