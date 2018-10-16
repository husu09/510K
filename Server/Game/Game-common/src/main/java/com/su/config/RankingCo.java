package com.su.config;

import com.su.common.obj.Item;

public class RankingCo {
	private int id;
	/**
	 * 晋级分数
	 * */
	private int riseScore;
	/**
	 * 段位奖励
	 * */
	private Item reward;
	/**
	 * 扣分比
	 * */
	private int eddScoreRate;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRiseScore() {
		return riseScore;
	}
	public void setRiseScore(int riseScore) {
		this.riseScore = riseScore;
	}
	public Item getReward() {
		return reward;
	}
	public void setReward(Item reward) {
		this.reward = reward;
	}
	public int getEddScoreRate() {
		return eddScoreRate;
	}
	public void setEddScoreRate(int eddScoreRate) {
		this.eddScoreRate = eddScoreRate;
	}
	
}
