package com.su.core.game.enums;

import java.util.HashMap;
import java.util.Map;

import com.su.core.game.Card;

public enum CallType {
	/**
	 * 叫牌 1
	 */
	CALL(1),
	/**
	 * 暗叫 2
	 */
	DARK(2),
	/**
	 * 明叫 3
	 */
	LIGHT(3);

	private int value;

	CallType(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;

	}

	private static final Map<Integer, CallType> map = new HashMap<>(CallType.values().length);

	static {
		for (CallType callType : CallType.values()) {
			map.put(callType.getValue(), callType);
		}
	}

	/**
	 * 根据值获取Enum
	 */
	public static CallType get(int value) {
		return map.get(value);
	}

	/**
	 * 叫牌验证
	 */
	public static boolean verify(CallType callType, Card[] cards, Card card) {
		boolean isSuccess = false;
		switch (callType) {
		case CALL:
			if (card == null || (card.getValue() == Card.CARD_XIAO_WANG || card.getValue() == Card.CARD_DA_WANG))
				return false;
			for (Card c : cards) {
				if (c != card && c.equals(card)) {
					return false;
				}
			}
			isSuccess = true;
			break;
		case DARK:
			if (card == null || (card.getValue() == Card.CARD_XIAO_WANG || card.getValue() == Card.CARD_DA_WANG))
				return false;
			for (Card c : cards) {
				if (c != card && c.equals(card)) {
					isSuccess = true;
					break;
				}
			}
			break;
		case LIGHT:
			if (card != null)
				return false;
			isSuccess = true;
			break;
		default:
			break;
		}
		return isSuccess;
	}
}
