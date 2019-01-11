package com.su.config;
import com.su.common.obj.Item;
public class ContestCo {
	private int id;
	/**类型*/
	private int type;
	/**名称*/
	private String name;
	/**初始底分*/
	private int baseScore;
	/**底分增量*/
	private int addedScore;
	/**赛场个数*/
	private int contestNum;
	/**初始积分*/
	private int initScore;
	/**报名消耗*/
	private Item cost;
	/**参赛人数*/
	private int playerNum;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Item getCost() {
		return cost;
	}

	public void setCost(Item cost) {
		this.cost = cost;
	}

	public int getPlayerNum() {
		return playerNum;
	}

	public void setPlayerNum(int playerNum) {
		this.playerNum = playerNum;
	}
}