package com.su.core.game;

import java.util.Comparator;
import java.util.Iterator;
import java.util.TreeSet;

import com.su.common.constant.GameConst;
import com.su.common.po.Player;
import com.su.common.util.ArrayUtil;
import com.su.config.SiteCo;
import com.su.core.context.PlayerContext;
import com.su.core.game.enums.SiteType;

public class RankingSite extends MatchSite {

	/**
	 * 匹配中的玩家队列，段位小的排前面
	 */
	private TreeSet<GamePlayer> playerSet = new TreeSet<>(new Comparator<GamePlayer>() {

		@Override
		public int compare(GamePlayer playerOne, GamePlayer playerTwo) {
			Player one = getPlayerByGamePlayer(playerOne);
			Player two = getPlayerByGamePlayer(playerTwo);
			return one.getRankingStep() - two.getRankingStep();
		}

	});

	private SiteCo siteCo;

	public RankingSite(SiteCo siteCo) {
		this.siteCo = siteCo;
		// 初始化牌桌
		for (int i = 0; i < siteCo.getInitTableNum(); i++) {
			Table table = new RankingTable(this);
			getIdleTableQueue().offer(table);
		}
	}

	@Override
	public synchronized boolean addPlayerToMatch(PlayerContext playerContext, boolean isFirst) {
		// 验证是否可以加入匹配队列
		if (playerContext.getGamePlayer() == null) {
			GamePlayer gamePlayer = new GamePlayer(playerContext);
			playerContext.setGamePlayer(gamePlayer);
		} else if (playerSet.contains(playerContext.getGamePlayer()))
			return false;
		else if (playerContext.getGamePlayer().getState() != null)
			return false;
		playerSet.add(playerContext.getGamePlayer());
		this.playerNum++;

		playerContext.setSite(this);
		tryStart();
		return true;
	}

	private void tryStart() {
		GamePlayer[] players = new GamePlayer[GameConst.PLAYER_COUNT];
		for (Iterator<GamePlayer> it = playerSet.iterator(); it.hasNext();) {
			GamePlayer player = it.next();
			// 获取最后一名玩家
			GamePlayer last = ArrayUtil.getLast(players);
			if (last != null && getPlayerByGamePlayer(last).getRankingStep()
					/ 10 != getPlayerByGamePlayer(player).getRankingStep() / 10)
				break;
			// 人数已满退出
			if (!ArrayUtil.add(players, player))
				break;
		}
		if (ArrayUtil.getCount(players) >= GameConst.PLAYER_COUNT) {
			for (int i = 0; i < players.length; i++)
				playerSet.remove(players[i]);
			return;
		}

		for (GamePlayer gamePlayer : players) {
			gamePlayer.getPlayerContext().setSite(null);
		}
		// 人数足够时开始游戏
		Table table = getIdleTableQueue().poll();
		if (table == null) {
			table = new RankingTable(this);
		}
		table.getActor().setPlayers(players);
		table.getActor().deal();
	}

	@Override
	public synchronized boolean removePlayerFromMatch(PlayerContext playerContext) {
		if (playerSet.remove(playerContext)) {
			playerContext.setSite(null);
			this.playerNum--;
			return true;
		}
		return false;
	}

	/**
	 * 获取配置对象
	 */
	@Override
	public SiteCo getSiteCo() {
		return siteCo;
	}

	@Override
	public SiteType getSiteType() {
		return SiteType.RANKING;
	}

	private Player getPlayerByGamePlayer(GamePlayer gamePlayer) {
		return gamePlayer.getPlayerContext().getActor().getPlayerById(gamePlayer.getId());
	}

}
