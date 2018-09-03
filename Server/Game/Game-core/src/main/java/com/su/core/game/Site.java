package com.su.core.game;

import java.util.concurrent.DelayQueue;

import com.su.core.game.enums.SiteType;

public abstract class Site {
	/**
	 * 玩家人数
	 */
	protected volatile int playerNum;
	/**
	 * 需要操作的牌桌队列
	 */
	private DelayQueue<Table> waitTableQueue = new DelayQueue<>();
	/**
	 * 需要操作的玩家队列
	 */
	private DelayQueue<GamePlayer> waitGamePlayerQueue = new DelayQueue<>();
	
	public int getPlayerNum() {
		return playerNum;
	}

	public DelayQueue<Table> getWaitTableQueue() {
		return waitTableQueue;
	}

	public DelayQueue<GamePlayer> getWaitGamePlayerQueue() {
		return waitGamePlayerQueue;
	}
	
	public void doWaitTable() {
		try {
			while (!Thread.currentThread().isInterrupted()) {
				Table table = waitTableQueue.take();
				table.getActor().doWaitTable();
			}
		} catch (Exception e) {
			//e.printStackTrace();
		}
	}

	public void doWaitGamePlayer() {
		try {
			while (!Thread.currentThread().isInterrupted()) {
				GamePlayer gamePlayer = waitGamePlayerQueue.take();
				gamePlayer.getTable().getActor().doWaitGamePlayer(gamePlayer);
			}
		} catch (Exception e) {
			//e.printStackTrace();
		}
	}
	
	public abstract SiteType getSiteType();
	

}
