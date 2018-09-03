	package com.su.core.game.assist.card;

import com.su.core.game.Card;
import com.su.core.game.enums.CardType;

/**
 * 牌型辅助类
 * */
public interface CardAssist {
	public boolean verify(Card[] cards);
	public boolean compare(Card[] cards, CardType lastCardType, Card[] lastCards);
}
