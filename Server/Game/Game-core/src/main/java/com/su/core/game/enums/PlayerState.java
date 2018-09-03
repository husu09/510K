package com.su.core.game.enums;

public enum PlayerState {
	/**
	 * 准备 1
	 */
	READY(1),
	/**
	 * 等待 2
	 */
	WAIT(2),
	/**
	 * 操作中 3
	 */
	OPERATE(3),
	/**
	 * 出完牌 4
	 */
	FINISH(4);
	private int value;

	PlayerState(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

}
