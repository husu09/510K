package com.su.core.game;

import com.su.core.game.enums.PlayerState;
import com.su.msg.MatchSiteMsg.Match_;
import com.su.msg.TableMsg.Quit_;

/**
 * 可匹配的牌桌
 */
public abstract class MatchTable extends Table {

	protected MatchSite matchSite;

	public MatchTable(Site site) {
		super(site);
		matchSite = (MatchSite) site;
	}

	@Override
	public void dissolveTable() {
		// 解散牌桌，准备中的玩家重新加入队列
		for (GamePlayer otherPlayer : this.players) {
			if (otherPlayer.getState() == PlayerState.READY) {
				matchSite.addPlayerToMatch(otherPlayer.getPlayerContext(), true);
				otherPlayer.getPlayerContext().write(Match_.newBuilder());
			} else {
				otherPlayer.getPlayerContext().write(Quit_.newBuilder());
			}
			otherPlayer.clean();
		}
		// 牌桌
		clean();
		this.matchSite.getIdleTableQueue().offer(this);
	}
}
