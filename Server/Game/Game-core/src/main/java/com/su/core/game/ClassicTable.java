package com.su.core.game;

import com.su.core.game.enums.Team;
import com.su.msg.TableMsg.TableResult_;

/**
 * 经典牌桌
 */
public class ClassicTable extends MatchTable {

	public ClassicTable(Site site) {
		super(site);
	}
	
	@Override
	public void doSettlement(TableResult_.Builder builder, Team winTeam, int redMultiple, int blueMultiple) {
		builder.setBaseScore(this.matchSite.getSiteCo().getBaseScore());
		for (GamePlayer otherPlayer : this.players) {
			TableResult tableResult = new TableResult();
			tableResult.setPlayerContext(otherPlayer.getPlayerContext());
			tableResult.setSiteCo(this.matchSite.getSiteCo());
			if (otherPlayer.getTeam() == winTeam)
				tableResult.setWin(true);
			else
				tableResult.setWin(false);

			if (otherPlayer.getTeam() == Team.RED)
				tableResult.setMultiple(redMultiple);
			else
				tableResult.setMultiple(blueMultiple);
			builder.addPlayerResult(otherPlayer.getPlayerContext().getActor().doTableResult(tableResult));
		}
	}
}
