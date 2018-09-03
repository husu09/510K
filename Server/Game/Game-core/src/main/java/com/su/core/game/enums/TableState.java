package com.su.core.game.enums;

public enum TableState {
	/**
	 * 加倍 1
	 * */
	DOUBLES(1),
	/**
	 * 叫牌 2
	 * */
	CALL(2),
	/**
	 * 出牌 3
	 * */
	DRAW(3),
	/**
	 * 结算 4
	 * */
	CLOSE(4);
	private int value;
	
	TableState(int value){
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
