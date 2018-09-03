package com.su.core.game.assist.card;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.su.core.game.enums.CardType;

@Component
public class CardAssistManager {
	
	private Map<CardType, CardAssist> cardProcessor = new HashMap<>();

	public Map<CardType, CardAssist> getCardProcessor() {
		return cardProcessor;
	}
	
}
