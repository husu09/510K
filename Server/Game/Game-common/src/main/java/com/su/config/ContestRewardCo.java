package com.su.config;

import com.su.common.obj.Goods;

public class ContestRewardCo {
	private int id;
	/**
	 * 比赛id
	 * */
	private int constId;
	/**
	 * 名次
	 * */
	private int ranking;
	/**
	 * 排名
	 * */
	private Goods reward;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getConstId() {
		return constId;
	}
	public void setConstId(int constId) {
		this.constId = constId;
	}
	public int getRanking() {
		return ranking;
	}
	public void setRanking(int ranking) {
		this.ranking = ranking;
	}
	public Goods getReward() {
		return reward;
	}
	public void setReward(Goods reward) {
		this.reward = reward;
	}
	
}
