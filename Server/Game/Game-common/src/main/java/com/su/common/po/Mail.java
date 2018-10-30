package com.su.common.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.alibaba.fastjson.JSON;
import com.su.common.data.Cache;
import com.su.common.obj.Item;

@Cache(startId = 10000000000L)
@Entity
public class Mail implements Serializable {
	
	@Id
	private long id;
	/**
	 * 玩家id
	 * */
	private long playerId;
	/**
	 * 邮件id
	 * */
	private int mailId;
	/**
	 * 发送人
	 * */
	private String sendName;
	/**
	 * 发送时间
	 * */
	private long sendTime;
	/**
	 * 邮件奖励
	 * */
	private String rewardData;
	@Transient
	private List<Item> rewards;
	public List<Item> getRewards() {
		if (rewards == null) {
			rewards = JSON.parseArray(rewardData, Item.class);
			if (rewards == null)
				rewards = new ArrayList<>();
		}
		return rewards;
	}
	public void updateRewardData() {
		rewardData = JSON.toJSONString(getRewards());
	}
	
	/**
	 * 参数
	 * */
	private String paramData;
	@Transient
	private List<String> params;
	public List<String> getParams() {
		if (params == null) {
			params = JSON.parseArray(paramData, String.class);
			if (params == null)
				params = new ArrayList<>();
		}
		return params;
	}
	public void updateParamData() {
		paramData = JSON.toJSONString(getParams());
	}
	
	/**
	 * 是否领取附件
	 * */
	private int isReceive;
	
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
	public int getMailId() {
		return mailId;
	}
	public void setMailId(int mailId) {
		this.mailId = mailId;
	}
	public long getSendTime() {
		return sendTime;
	}
	public void setSendTime(long sendTime) {
		this.sendTime = sendTime;
	}
	public String getSendName() {
		return sendName;
	}
	public void setSendName(String sendName) {
		this.sendName = sendName;
	}
	public int getIsReceive() {
		return isReceive;
	}
	public void setIsReceive(int isReceive) {
		this.isReceive = isReceive;
	}
	
}
