package com.su.core.game;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Queue;

import com.su.common.constant.GameConst;
import com.su.common.util.ArrayUtil;
import com.su.core.akka.AkkaContext;
import com.su.core.game.actor.ContestActor;
import com.su.core.game.actor.ContestActorImpl;

public class Contest {
	/**
	 * 牌桌
	 */
	private Queue<Table> tableQueue;
	/**
	 * 玩家
	 */
	private List<GamePlayer> playerList;
	/**
	 * 排名
	 */
	private Map<GamePlayer, ContestRanking> rankingMap;
	/**
	 * 底分
	 */
	private volatile int baseScore;
	/**
	 * 牌桌数
	 */
	private int tableNum;

	private ContestActor actor;

	/**
	 * 游戏场
	 */
	private ContestSite contestSite;
	/**
	 * 排名比较器
	 */
	private Comparator<Entry<GamePlayer, ContestRanking>> rankingComparator = new Comparator<Entry<GamePlayer, ContestRanking>>() {

		@Override
		public int compare(Entry<GamePlayer, ContestRanking> o1, Entry<GamePlayer, ContestRanking> o2) {
			return o2.getValue().getContestScore() - o1.getValue().getContestScore();
		}

	};

	public Contest(ContestSite contestSite) {
		this.actor = AkkaContext.createActor(ContestActor.class, ContestActorImpl.class, this);
		this.contestSite = contestSite;
		this.playerList = new LinkedList<>();
		this.rankingMap = new HashMap<>();
		this.baseScore = contestSite.getContestCo().getBaseScore();
		// 初始化牌桌
		this.tableNum = this.contestSite.getContestCo().getPlayerNum() / GameConst.PLAYER_COUNT;
		this.tableQueue = new LinkedList<>();
		for (int i = 0; i < this.tableNum; i++)
			this.tableQueue.offer(new ContestTable(contestSite, this));

	}

	/**
	 * 设置玩家
	 */
	public void setGamePlayer(List<GamePlayer> playerList) {
		for (int i = 0; i < playerList.size(); i++)
			this.playerList.add(playerList.get(i));
	}

	/**
	 * 开始比赛
	 */
	public void start() {
		// TODO 打乱玩家位置
		GamePlayer[] tablePlayer = new GamePlayer[GameConst.PLAYER_COUNT];
		int index = 0;
		for (GamePlayer player : this.playerList) {
			// 退出的玩家轮空
			if (player.getQuitState() != 0)
				continue;
			tablePlayer[index++] = player;
			if (ArrayUtil.getCount(tablePlayer) >= GameConst.PLAYER_COUNT) {
				Table table = tableQueue.poll();
				table.getActor().setPlayers(tablePlayer);
				table.getActor().deal();
				ArrayUtil.clear(tablePlayer);
				index = 0;
			}
			// 剩余的玩家轮空

		}
		// TODO 通知玩家轮空
		
	}

	/**
	 * 处理每轮结束
	 */
	public void checkTableClose(Table table) {
		this.tableQueue.offer(table);
		if (this.tableQueue.size() < this.tableNum)
			return;
		this.baseScore += this.contestSite.getContestCo().getAddedScore();
		// 处理排名
		for (Iterator<GamePlayer> it = this.playerList.iterator(); it.hasNext();) {
			GamePlayer gamePlayer = it.next();
			ContestRanking contestRanking = this.rankingMap.get(gamePlayer);
			if (contestRanking == null) {
				contestRanking = new ContestRanking();
				this.rankingMap.put(gamePlayer, contestRanking);
			}
			contestRanking.setContestScore(gamePlayer.getContestScore());
			// 淘汰玩家
			if (gamePlayer.getContestScore() < baseScore || gamePlayer.getQuitState() == 2) {
				it.remove();
				if (gamePlayer.getContestScore() < baseScore) 
					contestRanking.setState(1);
				else
					contestRanking.setState(2);
				gamePlayer.clean();
			} else {
				// 未淘汰玩家重置状态
				gamePlayer.contestReset();
			}
		}
		// 是否结束
		if (this.playerList.size() < GameConst.PLAYER_COUNT) {
			// 发放奖励
			List<Entry<GamePlayer, ContestRanking>> tempRankingList = new ArrayList<>(rankingMap.entrySet());
			Collections.sort(tempRankingList, this.rankingComparator);
			int i = 1;
			for (Entry<GamePlayer, ContestRanking> e : tempRankingList) {
				if (i > this.contestSite.getRewardCount())
					break;
				e.getKey().getPlayerContext().getActor().doContestClose(i);
				i++;
			}
			// 重置玩家状态
			for (GamePlayer gamePlayer : this.playerList)
				gamePlayer.clean();
			// 重置比赛状态
			resetAndclean();
			// 返还比赛对象
			contestSite.getContestQueue().offer(this);
		} else {
			// 开始下一轮
			start();
		}
		// TODO 通知
	}

	/**
	 * 重置和清除当前对象状态
	 */
	public void resetAndclean() {
		playerList.clear();
		rankingMap.clear();
		baseScore = 0;
		this.baseScore = contestSite.getContestCo().getBaseScore();
	}

	public ContestActor getActor() {
		return actor;
	}

	public ContestSite getContestSite() {
		return contestSite;
	}

	public int getBaseScore() {
		return baseScore;
	}

}
