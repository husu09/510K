package com.su.config;

public class SiteCo {
	private int id;
	/**
	 * 类型
	 * */
	private int siteType;
	/**
	 * 是否开放
	 * */
	private boolean isOpen;
	/**
	 * 底分
	 * */
	private int baseScore;
	/**
	 * 入场最低限制
	 * */
	private int miniBean;
	/**
	 * 入场最高限制
	 * */
	private int maxBean;
	/**
	 * 初始桌数
	 * */
	private int initTableNum;
	/**
	 * 排位得分加成%
	 * */
	private int rankingAddition;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getSiteType() {
		return siteType;
	}
	public void setSiteType(int siteType) {
		this.siteType = siteType;
	}
	public boolean isOpen() {
		return isOpen;
	}
	public void setOpen(boolean isOpen) {
		this.isOpen = isOpen;
	}
	public int getBaseScore() {
		return baseScore;
	}
	public void setBaseScore(int baseScore) {
		this.baseScore = baseScore;
	}
	public int getMiniBean() {
		return miniBean;
	}
	public void setMiniBean(int miniBean) {
		this.miniBean = miniBean;
	}
	public int getMaxBean() {
		return maxBean;
	}
	public void setMaxBean(int maxBean) {
		this.maxBean = maxBean;
	}
	public int getInitTableNum() {
		return initTableNum;
	}
	public void setInitTableNum(int initTableNum) {
		this.initTableNum = initTableNum;
	}
	public int getRankingAddition() {
		return rankingAddition;
	}
	public void setRankingAddition(int rankingAddition) {
		this.rankingAddition = rankingAddition;
	}
} 
