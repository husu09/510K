package com.su.core.game.enums;

public enum Team {
	/**
	 * 红 1
	 */
	RED(1),
	/**
	 * 蓝 2
	 */
	BLUE(2);
	private int value;

	Team(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
	
	/**
	 * 获取当前队伍相反的队伍
	 * */
	public Team getReverse() {
		if (this == Team.RED)
			return Team.BLUE;
		else
			return Team.RED;
	}
}
