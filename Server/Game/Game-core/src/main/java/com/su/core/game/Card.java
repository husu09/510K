package com.su.core.game;

import com.su.core.game.enums.Suit;

public class Card implements Comparable<Card> {
	/**
	 * 一幅牌的张数
	 */
	public static final int CARDS_NUM = 54;

	/**
	 * 玩家手牌张数
	 */
	public static final int HAND_CARDS_NUM = CARDS_NUM * 2 / 4;

	/**
	 * 卡牌对应的值
	 */
	public static final int CARD_3 = 3;
	public static final int CARD_4 = 4;
	public static final int CARD_5 = 5;
	public static final int CARD_6 = 6;
	public static final int CARD_7 = 7;
	public static final int CARD_8 = 8;
	public static final int CARD_9 = 9;
	public static final int CARD_10 = 10;
	public static final int CARD_J = 11;
	public static final int CARD_Q = 12;
	public static final int CARD_K = 13;
	public static final int CARD_A = 14;
	public static final int CARD_2 = 15;
	public static final int CARD_XIAO_WANG = 16;
	public static final int CARD_DA_WANG = 17;

	/**
	 * 一幅牌
	 */
	public static final Card[] ONE_CARDS;

	/**
	 * 初始化一幅牌
	 */
	static {
		Card[] cards = new Card[CARDS_NUM];
		int cycleNum = CARDS_NUM / 4;
		int value = CARD_3;
		for (int i = 0; i < cycleNum; i++) {
			int startIndex = i * 4;
			for (int j = 0; j < Suit.values().length; j++) {
				cards[startIndex + j] = new Card(value, Suit.values()[j]);
			}
			value++;
		}
		cards[52] = new Card(CARD_XIAO_WANG, null);
		cards[53] = new Card(CARD_DA_WANG, null);
		ONE_CARDS = cards;
	}
	/**
	 * 牌面
	 */
	private int value;
	/**
	 * 花色
	 */
	private Suit suit;

	public Card(int value, Suit suit) {
		this.value = value;
		this.suit = suit;
	}

	public int getValue() {
		return value;
	}

	public Suit getSuit() {
		return suit;
	}

	@Override
	public int compareTo(Card o) {
		if (value > o.getValue())
			return 1;
		else if (value < o.getValue())
			return -1;
		if (suit != null && o.getSuit() != null) {
			if (suit.getValue() > o.getSuit().getValue())
				return 1;
			else if (suit.getValue() < o.getSuit().getValue())
				return -1;
		}
		return 0;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((suit == null) ? 0 : suit.hashCode());
		result = prime * result + value;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Card other = (Card) obj;
		if (suit != other.suit)
			return false;
		if (value != other.value)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Card [value=" + value + ", suit=" + suit + "]";
	}

	/**
	 * 获取最大值
	 */
	public static Card getMax(Card[] cards) {
		Card max = cards[0];
		for (int i = 1; i < cards.length; i++) {
			if (cards[i].getValue() > max.getValue())
				max = cards[i];
		}
		return max;
	}

	/**
	 * 是否是同花
	 */
	public static boolean isTongHua(Card[] cards) {
		Card card = cards[0];
		for (int i = 1; i < cards.length; i++) {
			if (cards[i].getSuit() != card.getSuit())
				return false;
		}
		return true;

	}

	/**
	 * 计算得分
	 */
	public static int getScore(Card[] cards) {
		int score = 0;
		for (Card card : cards) {
			if (card.getValue() == CARD_5) {
				score += 5;
			} else if (card.getValue() == CARD_10 || card.getValue() == CARD_K) {
				score += 10;
			}
		}
		return score;
	}

}
