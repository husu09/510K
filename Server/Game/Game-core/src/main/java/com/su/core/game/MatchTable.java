package com.su.core.game;

import com.su.core.game.enums.PlayerState;
import com.su.msg.MatchSiteMsg.MatchTo;
import com.su.msg.TableMsg.QuitTo;

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
				otherPlayer.getPlayerContext().write(MatchTo.newBuilder());
			} else {
				otherPlayer.getPlayerContext().write(QuitTo.newBuilder());
			}
			otherPlayer.clean();
		}
		// 牌桌
		clean();
		this.matchSite.getIdleTableQueue().offer(this);
	}
}
