package com.su.core.game.enums;

import java.util.HashMap;
import java.util.Map;

public enum Suit {
	/**
	 * 方块 1
	 */
	FANG_KUAI(1),
	/**
	 * 梅花 2
	 */
	MEI_HUA(2),
	/**
	 * 红桃 3
	 */
	HONG_TAO(3),
	/**
	 * 黑桃 4
	 */
	HEI_TAO(4);
	
	private int value;
	private static final Map<Integer, Suit> map = new HashMap<>(Suit.values().length);

	static {
		for (Suit temp : Suit.values()) {
			map.put(temp.getValue(), temp);
		}
	}

	/**
	 * 根据值获取Enum
	 */
	public static Suit get(int value) {
		return map.get(value);
	}
	Suit(int value){
		this.value = value;
	}

	public int getValue() {
		return value;
	}
	
	
}
