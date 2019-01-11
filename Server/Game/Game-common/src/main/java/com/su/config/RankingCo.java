package com.su.config;
import com.su.common.obj.Item;
public class RankingCo {
	private int id;
	/**段位*/
	private String name;
	/**扣分比*/
	private int eddScoreRate;
	/**晋级分数*/
	private int riseScore;
	/**段位奖励*/
	private Item reward;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getEddScoreRate() {
		return eddScoreRate;
	}

	public void setEddScoreRate(int eddScoreRate) {
		this.eddScoreRate = eddScoreRate;
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
}