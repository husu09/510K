package com.su.config;

import com.su.common.obj.Goods;

public class RankingCo {
	private int id;
	/**
	 * 晋级分数
	 * */
	private int riseScore;
	/**
	 * 段位奖励
	 * */
	private Goods reward;
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
	public Goods getReward() {
		return reward;
	}
	public void setReward(Goods reward) {
		this.reward = reward;
	}
	public int getEddScoreRate() {
		return eddScoreRate;
	}
	public void setEddScoreRate(int eddScoreRate) {
		this.eddScoreRate = eddScoreRate;
	}
	
}
