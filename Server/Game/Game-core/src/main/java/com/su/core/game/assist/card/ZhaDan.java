package com.su.core.game.assist.card;

import org.springframework.stereotype.Component;

import com.su.core.game.Card;
import com.su.core.game.enums.CardType;

@Component
public class ZhaDan  extends BasicCardAssist {

	@Override
	public CardType getCardType() {
		return CardType.ZHA_DAN;
	}

	@Override
	public boolean verify(Card[] cards) {
		if (cards.length < 3 || cards.length > 8)
			return false;
		Card card = cards[0];
		if (card.getValue() > Card.CARD_2)
			return false;
		for (int i = 1; i < cards.length; i++) {
			if (cards[i].getValue() > Card.CARD_2)
				return false;
			if (cards[i].getValue() != card.getValue()) {
				return false;
			}
		}
		return true;
	}

	@Override
	public boolean compare(Card[] cards, CardType lastCardType, Card[] lastCards) {
		if (getCardType() == lastCardType) {
			if (cards.length < lastCards.length)
				return false;
			if (cards.length == lastCards.length) {
				if (cards[0].getValue() <= lastCards[0].getValue())
					return false;
			}
		} else if (lastCardType.equals(CardType.T_510K)) {
			if (Card.isTongHua(lastCards)) {
				if (cards.length < 7)
					return false;
			} else {
				if (cards.length < 6)
					return false;
			}

		} else if (lastCardType.equals(CardType.WANG_ZHA)) {
			if (cards.length < 8)
				return false;
		}
		return true;
	}

}
