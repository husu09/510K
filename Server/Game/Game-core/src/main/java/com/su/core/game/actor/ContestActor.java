package com.su.core.game.actor;

import java.util.List;

import com.su.core.game.GamePlayer;
import com.su.core.game.Table;

public interface ContestActor {
	public void setGamePlayer(List<GamePlayer> playerList) ;
	public void start();
	public void checkTableClose(Table table) ;
}
