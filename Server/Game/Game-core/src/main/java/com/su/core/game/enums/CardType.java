package com.su.core.game.enums;

import java.util.HashMap;
import java.util.Map;

public enum CardType {
	/**
	 * 单张 1
	 */
	DAN_ZHANG(1),
	/**
	 * 对子 2
	 */
	DUI_ZI(2),
	/**
	 * 连对 3
	 */
	LIAN_DUI(3),
	/**
	 * 顺子 4
	 */
	SHUN_ZI(4),
	/**
	 * 炸弹 5
	 */
	ZHA_DAN(5),
	/**
	 * 510K 6
	 */
	T_510K(6),
	/**
	 * 王炸 7
	 */
	WANG_ZHA(7);
	private int value;

	CardType(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;

	}

	private static final Map<Integer, CardType> map = new HashMap<>(CardType.values().length);

	static {
		for (CardType temp : CardType.values()) {
			map.put(temp.getValue(), temp);
		}
	}

	/**
	 * 根据值获取Enum
	 */
	public static CardType get(int value) {
		return map.get(value);
	}
	
}
