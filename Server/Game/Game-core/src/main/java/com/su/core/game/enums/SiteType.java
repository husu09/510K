package com.su.core.game.enums;

/**
 * 场类型
 * */
public enum SiteType {
	CLASSIC(1), RANKING(2), CONTEST(3);
	private int value;

	SiteType(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;

	}
}
