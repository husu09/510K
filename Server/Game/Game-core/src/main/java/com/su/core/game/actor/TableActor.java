package com.su.core.game.actor;

import com.su.core.game.GamePlayer;

public interface TableActor {
	public void setPlayers(GamePlayer[] players);

	public void deal();

	public void call(GamePlayer player, int callTypeValue, int index);
 
	public boolean doubles(GamePlayer player, int multiple);

	public void check(GamePlayer player);

	public void draw(GamePlayer player, int cardTypeValue, int[] indexs);

	public void ready(GamePlayer player);

	public void quit(GamePlayer gamePlayer ,int isInAc);

	public void auto(GamePlayer gamePlayer, int isAuto);

	public void reconnect(GamePlayer gamePlayer);

	public void doWaitGamePlayer(GamePlayer gamePlayer);

	public void doWaitTable();
}
