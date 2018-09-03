package com.su.core.game.enums;

import com.su.core.game.Card;

public enum MultipleType {
	/**
	 * 初始倍数 0
	 */
	CHU_SHI(15),
	/**
	 * 叫牌 1
	 */
	JIAO_PAI(2),
	/**
	 * 暗叫 2
	 */
	AN_JIAO(4),
	/**
	 * 明叫 3
	 */
	MING_JIAO(6),
	/**
	 * 全胜 4
	 */
	QUAN_SHENG(2),
	/**
	 * 满分 5
	 */
	MAN_FEN(4),
	/**
	 * 510K 6
	 */
	F_510K(2),
	/**
	 * 六炸 7
	 */
	LIU_ZHA(2),
	/**
	 * 七炸 8
	 */
	QI_ZHA(3),
	/**
	 * 王炸 9
	 */
	WANG_ZHA(2),
	/**
	 * 同花510k 10
	 */
	TONG_HUA_510K(3),
	/**
	 * 天炸 11
	 */
	TIAN_ZHA(4);

	private int value;

	private MultipleType(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

	/**
	 * 获取倍数
	 */
	public static MultipleType getMultiple(Object o, Card[] cards) {
		if (o instanceof CallType) {
			// 叫牌倍数
			if (o == CallType.CALL)
				return MultipleType.JIAO_PAI;
			else if (o == CallType.DARK)
				return MultipleType.AN_JIAO;
			else if (o == CallType.LIGHT)
				return MultipleType.MING_JIAO;
		} else if (o instanceof CardType) {
			// 出牌倍数
			if (o == CardType.T_510K) {
				if (Card.isTongHua(cards))
					return MultipleType.TONG_HUA_510K;
				else
					return MultipleType.F_510K;
			} else if (o == CardType.ZHA_DAN) {
				if (cards.length == 6)
					return MultipleType.LIU_ZHA;
				if (cards.length == 7)
					return MultipleType.QI_ZHA;
				if (cards.length == 8)
					return MultipleType.TIAN_ZHA;
			} else if (o == CardType.WANG_ZHA) {
				return MultipleType.WANG_ZHA;
			}
		} else if (o instanceof MultipleType) {
			return (MultipleType) o;
		}
		return null;
	}

}
