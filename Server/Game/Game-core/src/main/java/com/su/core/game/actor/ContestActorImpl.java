package com.su.core.game.actor;

import java.util.List;

import com.su.core.game.Contest;
import com.su.core.game.GamePlayer;
import com.su.core.game.Table;

public class ContestActorImpl implements ContestActor {

	private Contest contest;

	public ContestActorImpl(Contest contest) {
		this.contest = contest;
	}

	@Override
	public void setGamePlayer(List<GamePlayer> playerList) {
		contest.setGamePlayer(playerList);
	}

	@Override
	public void start() {
		contest.start();
	}

	@Override
	public void checkTableClose(Table table) {
		contest.checkTableClose(table);
	}

}
