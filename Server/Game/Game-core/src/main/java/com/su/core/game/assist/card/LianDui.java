package com.su.core.game.assist.card;

import org.springframework.stereotype.Component;

import com.su.core.game.Card;
import com.su.core.game.enums.CardType;

@Component
public class LianDui extends BasicCardAssist {

	@Override
	public CardType getCardType() {
		return CardType.LIAN_DUI;
	}

	@Override
	public boolean verify(Card[] cards) {
		if (cards.length < 6)
			return false;
		if (cards.length % 2 != 0)
			return false;
		Card card = cards[0];
		if (card.getValue() > Card.CARD_A)
			return false;
		for (int i = 1; i < cards.length; i++) {
			if (cards[i].getValue() > Card.CARD_A)
				return false;
			if (cards[i].getValue() != card.getValue() && cards[i].getValue() != card.getValue() + 1) {
				return false;
			}
			card = cards[i];

		}

		return true;
	}

	@Override
	public boolean compare(Card[] cards, CardType lastCardType, Card[] lastCards) {
		if (getCardType() == lastCardType) {
			if (cards.length != lastCards.length)
				return false;
			if (Card.getMax(cards).getValue() > Card.getMax(lastCards).getValue())
				return true;
		}
		return false;
	}

}
