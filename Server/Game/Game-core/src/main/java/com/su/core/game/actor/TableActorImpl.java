package com.su.core.game.actor;

import com.su.core.game.GamePlayer;
import com.su.core.game.Table;

public class TableActorImpl implements TableActor {

	private Table table;

	public TableActorImpl(Table table) {
		this.table = table;
	}

	@Override
	public void setPlayers(GamePlayer[] players) {
		table.setPlayers(players);
	}

	@Override
	public void deal() {
		table.deal();
	}

	@Override
	public void call(GamePlayer player, int callTypeValue, int index) {
		table.call(player, callTypeValue, index);
	}

	@Override
	public boolean doubles(GamePlayer player, int multiple) {
		return table.doubles(player, multiple);
	}

	@Override
	public void check(GamePlayer player) {
		table.check(player);
	}

	@Override
	public void draw(GamePlayer player, int cardTypeValue, int[] indexs) {
		table.draw(player, cardTypeValue, indexs);
	}

	@Override
	public void ready(GamePlayer player) {
		table.ready(player);
	}

	@Override
	public void quit(GamePlayer gamePlayer, int isInAc) {
		table.quit(gamePlayer, isInAc);
	}

	@Override
	public void auto(GamePlayer gamePlayer, int isAuto) {
		table.auto(gamePlayer, isAuto);
	}

	@Override
	public void reconnect(GamePlayer gamePlayer) {
		table.reconnect(gamePlayer);
	}

	@Override
	public void doWaitGamePlayer(GamePlayer gamePlayer) {
		table.doWaitGamePlayer(gamePlayer);
	}

	@Override
	public void doWaitTable() {
		table.doWaitTable();
	}

}
