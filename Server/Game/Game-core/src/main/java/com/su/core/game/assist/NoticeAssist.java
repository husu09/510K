package com.su.core.game.assist;

import org.springframework.stereotype.Component;

import com.su.core.game.Card;
import com.su.core.game.GamePlayer;
import com.su.core.game.Table;
import com.su.msg.TableMsg._Card;
import com.su.msg.TableMsg._GamePlayer;
import com.su.msg.TableMsg._Table;

@Component
public class NoticeAssist {
	/**
	 * 通知所有状态
	 */
	public void notice(Table basicTable) {
		for (GamePlayer otherGamePlayer : basicTable.getPlayers()) {
			otherGamePlayer.getPlayerContext().write(serializeTable(otherGamePlayer.getTable(),
					otherGamePlayer.getTable().getTableBuilder(), otherGamePlayer));
		}
	}

	/**
	 * 序列化牌桌
	 */
	public _Table serializeTable(Table table, _Table.Builder builder, GamePlayer currGamePlayer) {
		builder.clear();
		// 玩家
		for (GamePlayer otherGamePlayer : table.getPlayers())
			builder.addPlayer(serializeGamePlayer(otherGamePlayer, table.getGamePlayerBuilder(),
					currGamePlayer.equals(otherGamePlayer)));
		for (int multiple : table.getMultiples())
			builder.addMultiple(multiple);
		if (table.getState() != null)
			builder.setState(table.getState().getValue());
		if (table.getLastCards() != null) {
			for (Card card : table.getLastCards()) {
				if (card != null)
					builder.addLastCard(serializeCard(card, table.getCardBuilder()));
			}
		}
		if (table.getLastCardType() != null)
			builder.setLastCardType(table.getLastCardType().getValue());
		if (table.getLastOp() != null)
			builder.setLastOp(table.getLastOp());
		builder.setRoundScore(table.getRoundScore());
		if (table.getCallCard() != null)
			builder.setCallCard(serializeCard(table.getCallCard(), table.getCardBuilder()));
		if (table.getCallType() != null)
			builder.setCallType(table.getCallType().getValue());
		if (table.getCallOp() != null)
			builder.setCallOp(table.getCallOp());
		builder.setDealer(table.getDealer());
		if (table.getWaitTime() != null)
			builder.setWaitTime(table.getWaitTime());
		builder.setType(table.getSite().getSiteType().getValue());
		return builder.build();
	}

	/**
	 * 序列化游戏玩家
	 */
	public _GamePlayer serializeGamePlayer(GamePlayer gamePlayer, _GamePlayer.Builder builder, boolean isContainHands) {
		builder.clear();
		builder.setId(gamePlayer.getId());
		// 就否包含手牌
		if (isContainHands)
			for (Card card : gamePlayer.getHandCards()) {
				if (card != null)
					builder.addHandCard(serializeCard(card, gamePlayer.getTable().getCardBuilder()));
			}
		else
			builder.setCardNum(gamePlayer.getHandCardsCount());
		builder.setMultiple(gamePlayer.getMultiple());
		builder.setScore(gamePlayer.getScore());
		builder.setIsAuto(gamePlayer.getIsAuto());
		if (gamePlayer.getState() != null)
			builder.setState(gamePlayer.getState().getValue());
		if (gamePlayer.getOpTime() != null)
			builder.setOpTime(gamePlayer.getOpTime());
		builder.setContestScore(gamePlayer.getContestScore());
		builder.setIsQuit(gamePlayer.getQuitState());
		return builder.build();
	}

	/**
	 * 序列化卡牌
	 */
	public _Card serializeCard(Card card, _Card.Builder builder) {
		builder.clear();
		builder.setValue(card.getValue());
		if (card.getSuit() != null)
			builder.setSuit(card.getSuit().getValue());
		return builder.build();
	}

}
