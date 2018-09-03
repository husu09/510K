package com.su.core.game.assist;

import com.su.core.game.AutoCards;
import com.su.core.game.Card;
import com.su.core.game.GamePlayer;
import com.su.core.game.enums.CardType;

public class AIAssist {
	/**
	 * 自动出牌
	 * @param lastPlayer 上游玩家
	 * @param lastCardType 上游玩家出牌类型
	 * @param lastCards	上游玩家出牌
	 * @param player	当前玩家
	 * @return
	 */
	public AutoCards getAutoResult(GamePlayer lastPlayer, CardType lastCardType, Card[] lastCards, GamePlayer player) {
		AutoCards autoResult = null;
		if (lastPlayer == null || lastPlayer.equals(player)) {
			// 获取最小的牌
		} else if (player.getTeam() == lastPlayer.getTeam()) {
			// 己方出牌时跳过
			return null;
		} else {
			// 获取比对方大的牌
		}
		
		return autoResult;
	}
	
	
}
