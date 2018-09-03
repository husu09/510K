package com.su.core.game;

public class ContestRanking {
	/**
	 * 比赛积分
	 * */
	private int contestScore;
	/**
	 * 是否淘汰 1：淘汰，2：退出淘汰
	 * */
	private int state;
	
	public int getContestScore() {
		return contestScore;
	}
	public void setContestScore(int contestScore) {
		this.contestScore = contestScore;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	
}
