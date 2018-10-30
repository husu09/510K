package com.su.common.po;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.su.common.data.Cache;

@Cache(startId = 10000000000L)
@Entity
public class AucItem  implements Serializable {
	@Id
	private long id;
	/**
	 * 物品类型
	 * */
	private int type;
	/**
	 * 品质
	 * */
	private int quality;
	/**
	 * 物品id
	 * */
	private int sysId;
	/**
	 * 物品数量
	 * */
	private int count;
	/**
	 * 价格类型
	 * */
	private int monType;
	/**
	 * 价格
	 * */
	private int price;
	/**
	 * 玩家id
	 * */
	private long playerId;
	/**
	 * 上架时间
	 * */
	private long endTime;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public int getMonType() {
		return monType;
	}
	public void setMonType(int monType) {
		this.monType = monType;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public long getPlayerId() {
		return playerId;
	}
	public void setPlayerId(long playerId) {
		this.playerId = playerId;
	}
	public long getEndTime() {
		return endTime;
	}
	public void setEndTime(long endTime) {
		this.endTime = endTime;
	}
	public int getQuality() {
		return quality;
	}
	public void setQuality(int quality) {
		this.quality = quality;
	}
	
}
