package com.su.core.game.assist.card;

import org.springframework.stereotype.Component;

import com.su.core.game.Card;
import com.su.core.game.enums.CardType;

@Component
public class WangZha extends BasicCardAssist {

	@Override
	public CardType getCardType() {
		return CardType.WANG_ZHA;
	}

	@Override
	public boolean verify(Card[] cards) {
		if (cards.length != 2)
			return false;
		if (cards[0].getValue() < Card.CARD_XIAO_WANG)
			return false;
		if (cards[1].getValue() < Card.CARD_XIAO_WANG)
			return false;
		return true;
	}

	@Override
	public boolean compare(Card[] cards, CardType lastCardType, Card[] lastCards) {
		if (getCardType() == lastCardType) {
			if (cards[0].getValue() + cards[1].getValue() <= lastCards[0].getValue() + lastCards[1].getValue())
				return false;
		} else if (lastCardType.equals(CardType.ZHA_DAN)) {
			if (lastCards.length >= 8)
				return false;
		} else if (lastCardType.equals(CardType.T_510K)) {
			return true;
		}

		return true;
	}

}
