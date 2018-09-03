package com.su.config;

import com.su.common.obj.Goods;

public class ContestCo {
	private int id;
	/**
	 * 基础底分
	 * */
	private int baseScore;
	/**
	 * 底分增量
	 * */
	private int addedScore;
	/**
	 * 初始个数
	 * */
	private int contestNum;
	/**
	 * 初始积分
	 * */
	private int initScore;
	/**
	 * 报名消耗
	 * */
	private Goods Cost;
	/**
	 * 报名人数
	 * */
	private int playerNum;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getBaseScore() {
		return baseScore;
	}
	public void setBaseScore(int baseScore) {
		this.baseScore = baseScore;
	}
	public int getAddedScore() {
		return addedScore;
	}
	public void setAddedScore(int addedScore) {
		this.addedScore = addedScore;
	}
	public int getContestNum() {
		return contestNum;
	}
	public void setContestNum(int contestNum) {
		this.contestNum = contestNum;
	}
	public int getInitScore() {
		return initScore;
	}
	public void setInitScore(int initScore) {
		this.initScore = initScore;
	}
	public Goods getCost() {
		return Cost;
	}
	public void setCost(Goods cost) {
		Cost = cost;
	}
	public int getPlayerNum() {
		return playerNum;
	}
	public void setPlayerNum(int playerNum) {
		this.playerNum = playerNum;
	}
	
	
}
