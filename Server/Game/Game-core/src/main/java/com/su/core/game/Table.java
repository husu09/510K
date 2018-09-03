package com.su.core.game;

import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.Delayed;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.su.common.constant.GameConst;
import com.su.common.util.CommonUtil;
import com.su.common.util.SpringUtil;
import com.su.common.util.TimeUtil;
import com.su.core.akka.AkkaContext;
import com.su.core.game.actor.TableActor;
import com.su.core.game.actor.TableActorImpl;
import com.su.core.game.assist.NoticeAssist;
import com.su.core.game.assist.card.CardAssist;
import com.su.core.game.assist.card.CardAssistManager;
import com.su.core.game.enums.CallType;
import com.su.core.game.enums.CardType;
import com.su.core.game.enums.MultipleType;
import com.su.core.game.enums.PlayerState;
import com.su.core.game.enums.TableState;
import com.su.core.game.enums.Team;
import com.su.msg.TableMsg.Quit_;
import com.su.msg.TableMsg.TableResult_;
import com.su.msg.TableMsg._Card;
import com.su.msg.TableMsg._GamePlayer;
import com.su.msg.TableMsg._Table;

public abstract class Table implements Delayed {
	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	/**
	 * 牌
	 */
	protected Card[] cards;
	/**
	 * 玩家
	 */
	protected GamePlayer[] players;
	/**
	 * 状态
	 */
	protected TableState state;
	/**
	 * 轮分
	 */
	protected int roundScore;
	/**
	 * 被叫的牌
	 */
	protected Card callCard;
	protected CallType callType;
	protected Integer callOp;
	/**
	 * 公共倍数
	 */
	protected int[] multiples;
	/**
	 * 最后出牌
	 */
	protected Card[] lastCards;
	protected CardType lastCardType;
	protected Integer lastOp;
	/**
	 * 庄家
	 */
	protected int dealer;
	/**
	 * 结算后的等待时间
	 */
	protected Long waitTime;
	/**
	 * 排名
	 */
	protected Integer[] ranks;
	/**
	 * 房间
	 */
	protected Site site;
	/**
	 * actor
	 */
	protected TableActor actor;
	/**
	 * 结算时等待时间
	 */
	protected static final int CLOSE_WAIT_TIME = TimeUtil.ONE_SECOND * 15;
	/**
	 * 加倍时间
	 */
	protected static final int DOUBLES_WAIT_TIME = TimeUtil.ONE_SECOND * 15;
	/**
	 * 辅助对象
	 */
	protected CardAssistManager cardAssistManager = SpringUtil.getContext().getBean(CardAssistManager.class);
	protected NoticeAssist noticeAssist = SpringUtil.getContext().getBean(NoticeAssist.class);
	/**
	 * 通知使用的 build 对象
	 */
	private _Table.Builder tableBuilder = _Table.newBuilder();
	private _GamePlayer.Builder gamePlayerBuilder = _GamePlayer.newBuilder();
	private _Card.Builder cardBuilder = _Card.newBuilder();

	public Table(Site site) {
		this.actor = AkkaContext.createActor(TableActor.class, TableActorImpl.class, this);
		this.site = site;
		// 初始化牌
		Card[] cards = new Card[Card.CARDS_NUM * 2];
		System.arraycopy(Card.ONE_CARDS, 0, cards, 0, Card.CARDS_NUM);
		System.arraycopy(Card.ONE_CARDS, 0, cards, Card.CARDS_NUM, Card.CARDS_NUM);
		this.cards = cards;
		this.multiples = new int[MultipleType.values().length];
		this.ranks = new Integer[GameConst.PLAYER_COUNT];
	}

	/**
	 * 清空牌桌数据（解散牌桌时）
	 */
	public void clean() {
		reset();
		// 清空玩家
		for (int i = 0; i < this.players.length; i++)
			this.players[i] = null;
		// 庄家
		this.dealer = 0;
	}

	/**
	 * 重置牌桌状态（开始下一局时）
	 */
	public void reset() {
		// 状态
		setState(null);
		// 轮分
		this.roundScore = 0;
		// 叫牌状态
		this.callCard = null;
		this.callType = null;
		this.callOp = null;
		// 重置倍数
		for (int i = 0; i < this.multiples.length; i++)
			this.multiples[i] = 0;
		// 最后出牌
		this.lastCards = null;
		this.lastCardType = null;
		this.lastOp = null;
		// 等待时间
		this.waitTime = null;
		// 重置玩家状态
		for (GamePlayer gamePlayer : this.players) {
			gamePlayer.reset();
		}
		// 排名
		for (int i = 0; i < this.ranks.length; i++)
			this.ranks[i] = null;
	}

	/**
	 * 设置玩家
	 */
	public void setPlayers(GamePlayer[] players) {
		// 玩家数据
		for (int i = 0; i < players.length; i++) {
			players[i].setIndex(i);
			players[i].setTable(this);
			players[i].setState(PlayerState.WAIT);
		}
		this.players = players;
	}

	/**
	 * 洗牌
	 */
	private void shuffle() {
		for (int i = 0; i < this.cards.length; i++) {
			Card tmp = this.cards[i];
			int r = CommonUtil.range(i, this.cards.length);
			this.cards[i] = this.cards[r];
			this.cards[r] = tmp;
		}
	}

	/**
	 * 发牌
	 */
	public void deal() {
		// 洗牌
		shuffle();
		// 发牌
		int cycleCount = this.cards.length / 4;
		for (int i = 0; i < cycleCount; i++) {
			int startIndex = i * GameConst.PLAYER_COUNT;
			for (int j = 0; j < GameConst.PLAYER_COUNT; j++) {
				this.players[this.dealer + j % 4].getHandCards()[i] = this.cards[startIndex + j];
				this.cards[startIndex + j] = null;
			}
		}
		for (int i = 0; i < this.players.length; i++) {
			Arrays.sort(this.players[i].getHandCards(), Collections.reverseOrder());
		}
		// 转换到叫牌状态
		setState(TableState.CALL);
		this.players[this.dealer].setState(PlayerState.OPERATE);
		// 通知
		noticeAssist.notice(this);
	}

	/**
	 * 叫牌
	 */
	public void call(GamePlayer player, int callTypeValue, int index) {
		if (player.getState() != PlayerState.OPERATE) {
			logger.error("Player state is not operate {} {}", player.getState(), player.getId());
			return;
		}
		if (this.state != TableState.CALL) {
			logger.error("Table state is not call {} {}", this.state, player.getId());
			return;
		}
		CallType callType = CallType.get(callTypeValue);
		if (callType == null) {
			logger.error("CallType is null {} {}", callType, player.getId());
			return;
		}
		Card card = player.getHandCards()[index];
		if (!CallType.verify(callType, player.getHandCards(), card)) {
			logger.error("Call verify fail {} {} {}", callType, card, player.getId());
			return;
		}
		// 只有庄家能叫牌，其它玩家只能明叫
		if (callType != CallType.LIGHT && player.getIndex() != this.dealer) {
			logger.error("Player is not call {} {} {} {}", callType, this.dealer, player.getIndex(), player.getId());
			return;
		}
		// 牌桌
		this.callCard = card;
		this.callType = callType;
		this.callOp = player.getIndex();
		// 倍数
		addMultiple(callType, null);
		if (callType == CallType.LIGHT) {
			// 当前玩家
			player.setTeam(Team.RED);
			// 其它玩家
			for (GamePlayer gamePlayer : players) {
				if (gamePlayer.equals(player))
					continue;
				gamePlayer.setTeam(Team.BLUE);
			}
			callToDoubles();
		} else {
			// 当前玩家
			player.setTeam(Team.RED);
			player.setState(PlayerState.WAIT);
			// 全部操作完
			if (isSameState(PlayerState.WAIT))
				callToDoubles();
			else {
				doNextPlayerState(player);
			}
		}
		// 通知
		noticeAssist.notice(this);

	}

	/**
	 * 加倍
	 */
	public boolean doubles(GamePlayer player, int multiple) {
		if (player.getState() != PlayerState.OPERATE) {
			logger.error("Player state is not operate {} {}", player.getState(), player.getId());
			return false;
		}
		if (this.state != TableState.DOUBLES) {
			logger.error("Table state is not doubles {} {}", this.state, player.getId());
			return false;
		}
		player.setMultiple(player.getMultiple() + multiple);
		player.setState(PlayerState.WAIT);
		// 加倍结束切换状态
		if (isSameState(PlayerState.WAIT)) {
			doublesToDraw();
		}
		// 通知
		noticeAssist.notice(this);
		return true;
	}

	/**
	 * 过牌
	 */
	public void check(GamePlayer player) {
		if (player.getState() != PlayerState.OPERATE) {
			logger.error("Player state is not operate {} {}", player.getState(), player.getId());
			return;
		}
		player.setState(PlayerState.WAIT);

		if (this.state == TableState.CALL) {
			// 不叫
			// 叫牌结束切换状态
			if (isSameState(PlayerState.WAIT))
				callToDoubles();

		} else if (this.state == TableState.DOUBLES) {
			// 不加倍
			// 加倍结束切换状态
			if (isSameState(PlayerState.WAIT))
				doublesToDraw();

		} else if (this.state == TableState.DRAW) {
			// 过牌
			// 处理下家
			doNextPlayerState(player);
		} else {
			logger.error("Table state is not allow {} {}", this.state, player.getId());
			return;
		}
		// 通知
		noticeAssist.notice(this);
	}

	/**
	 * 出牌
	 */
	public void draw(GamePlayer player, int cardTypeValue, int[] indexs) {
		// 验证
		if (player.getState() != PlayerState.OPERATE) {
			logger.error("Player state is not operate {} {}", player.getState(), player.getId());
			return;
		}
		if (state != TableState.DRAW) {
			logger.error("Table state is not allow {} {}", this.state, player.getId());
			return;
		}
		CardType cardType = CardType.get(cardTypeValue);
		if (cardType == null) {
			logger.error("CardType is null {} {}", cardTypeValue, player.getId());
			return;
		}
		// 出牌
		Card[] cards = new Card[indexs.length];
		for (int i = 0; i < indexs.length; i++) {
			Card card = player.getHandCards()[indexs[i]];
			if (card == null) {
				logger.error("Indexs not match handCards {} {}", indexs[i], player.getId());
				return;
			}
			cards[i] = card;
			player.getHandCards()[indexs[i]] = null;
		}

		// 出牌验证
		CardAssist cardProcessor = cardAssistManager.getCardProcessor().get(cardType);
		if (!cardProcessor.verify(cards)) {
			logger.error("CardType not match Cards {} {} {}", cardTypeValue, Arrays.toString(cards), player.getId());
			return;
		}
		if (!cardProcessor.compare(cards, this.lastCardType, this.lastCards)) {
			logger.error("Cards not BG. lastCards {} {} {}", Arrays.toString(cards), Arrays.toString(this.lastCards),
					player.getId());
			return;
		}
		// 当前玩家
		player.setState(PlayerState.WAIT);
		// 倍数
		addMultiple(cardType, cards);
		// 轮分
		this.roundScore += Card.getScore(cards);
		if (this.callType != CallType.LIGHT && this.callType != CallType.DARK) {
			if (this.lastOp == player.getIndex() && this.roundScore != 0) {
				player.setScore(player.getScore() + this.roundScore);
				this.roundScore = 0;
			}
		}
		// 牌桌
		this.lastCards = cards;
		this.lastCardType = cardType;
		this.lastOp = player.getIndex();
		doPlayerTeamWithDraw(player, cards);
		// 出牌完成
		if (isFinish(player)) {
			player.setState(PlayerState.FINISH);
			if (player.getTeam() == null)
				player.setTeam(Team.BLUE);
			// 排名
			addToRanks(player);
			Team winTeam = getWinTeam(player);
			if (winTeam != null)
				settlement(winTeam);
		} else {
			// 游戏未结束，由下家出牌
			doNextPlayerState(player);
			// 记录出牌
			draw2CardHeap(cards);
		}
		// 通知
		noticeAssist.notice(this);
	}

	/**
	 * 出牌添加到牌堆
	 */
	private void draw2CardHeap(Card[] opCards) {
		for (int i = 0; i < opCards.length; i++) {
			if (opCards[i] == null)
				continue;
			for (int j = 0; j < this.cards.length; j++) {
				if (this.cards[j] == null)
					this.cards[j] = opCards[i];
			}
		}
	}

	/**
	 * 出牌后处理玩家队伍
	 */
	private void doPlayerTeamWithDraw(GamePlayer player, Card[] cards) {
		if (this.callType == CallType.LIGHT)
			return;
		for (Card card : cards) {
			if (card != this.callCard && card.equals(this.callCard)) {
				if (player.getIndex() != this.callOp) {
					// 叫牌
					GamePlayer callPlayer = this.players[this.callOp];
					player.setTeam(callPlayer.getTeam());
					for (GamePlayer otherPlayer : this.players) {
						if (otherPlayer.equals(player) || otherPlayer.equals(callPlayer))
							continue;
						otherPlayer.setTeam(Team.BLUE);
					}
				} else {
					// 暗叫
					// 倍数
					eddMultiple(CallType.CALL, null);
					addMultiple(CallType.DARK, null);
					// 清空积分
					for (GamePlayer otherPlayer : this.players) {
						otherPlayer.setScore(0);
						if (otherPlayer.equals(player))
							continue;
						otherPlayer.setTeam(Team.BLUE);
					}
					this.roundScore = 0;
					this.callType = CallType.DARK;
				}

			}

		}
	}

	/**
	 * 获取获胜的队伍
	 */
	private Team getWinTeam(GamePlayer player) {
		Team winTeam = null;

		if (this.callType == CallType.LIGHT || this.callType == CallType.DARK && this.players[this.ranks[0]] != null) {
			winTeam = this.players[ranks[0]].getTeam();
		} else if (this.players[ranks[0]].getTeam() == this.players[ranks[1]].getTeam()) {
			winTeam = this.players[ranks[0]].getTeam();
			for (GamePlayer otherPlayer : this.players) {
				if (player.getTeam() == null)
					player.setTeam(winTeam.getReverse());
				otherPlayer.setState(PlayerState.FINISH);
				// 排名
				addToRanks(otherPlayer);
			}
			// 全胜
			addMultiple(MultipleType.QUAN_SHENG, null);
			// 满分
			int winScore = 0;
			for (GamePlayer otherPlayer : this.players) {
				if (otherPlayer.getTeam() == winTeam)
					winScore += otherPlayer.getScore();
			}
			if (winScore >= 200)
				addMultiple(MultipleType.MAN_FEN, null);
		} else if (getRanksCount() >= 3) {
			GamePlayer lastPlayer = getLastPlayer();
			if (player.getTeam() == null)
				player.setTeam(this.players[this.ranks[2]].getTeam().getReverse());
			lastPlayer.setState(PlayerState.FINISH);
			// 排名
			addToRanks(lastPlayer);

			// 最后出牌玩家分数处理
			// 手中的分数给第一名
			this.players[this.ranks[0]].setScore(this.players[this.ranks[0]].getScore() + lastPlayer.getScore());
			// 最后玩家得分作废
			lastPlayer.setScore(0);
			// 未出的分数直接加个对方
			int leftScore = Card.getScore(lastPlayer.getHandCards());

			// 最后剩余轮分处理
			if (this.roundScore != 0) {
				player.setScore(player.getScore() + this.roundScore);
				this.roundScore = 0;
			}
			// 计算总分
			int redScore = 0;
			int blueScore = 0;
			for (GamePlayer otherPlayer : this.players) {
				if (otherPlayer.getTeam() == Team.RED)
					redScore += otherPlayer.getScore();
				else
					blueScore += otherPlayer.getScore();
			}
			if (lastPlayer.getTeam() == Team.RED)
				blueScore += leftScore;
			else
				redScore += blueScore;

			if (redScore > blueScore) {
				winTeam = Team.RED;
			} else if (redScore == blueScore) {
				winTeam = this.players[ranks[0]].getTeam();
			} else {
				winTeam = Team.BLUE;
			}
			// 满分
			if (redScore >= 200 || blueScore >= 200)
				addMultiple(MultipleType.MAN_FEN, null);
		}
		if (winTeam != null) {
			// 结算时未出的牌添加到牌堆
			for (GamePlayer gamePlayer : this.players) {
				if (gamePlayer.getState() != PlayerState.FINISH) {
					draw2CardHeap(gamePlayer.getHandCards());
					gamePlayer.setState(PlayerState.FINISH);
				}
			}
		}
		return winTeam;
	}

	/**
	 * 子类实现的结算方法
	 */
	protected abstract void doSettlement(TableResult_.Builder builder, Team winTeam, int redMultiple, int blueMultiple);

	/**
	 * 结算
	 */
	private void settlement(Team winTeam) {
		// 计算倍数
		int sumMultiple = 0;
		for (int multiple : this.multiples) {
			sumMultiple *= multiple;
		}
		for (GamePlayer otherPlayer : this.players) {
			sumMultiple *= otherPlayer.getMultiple();
		}
		int redMultiple = sumMultiple / getTeamCount(Team.RED);
		int blueMultiple = sumMultiple / getTeamCount(Team.BLUE);
		// 玩家结算
		TableResult_.Builder builder = TableResult_.newBuilder();
		builder.setWinTeam(winTeam.getValue());
		doSettlement(builder, winTeam, redMultiple, blueMultiple);
		// 下局的庄家
		for (int i = 0; i < this.ranks.length; i++) {
			if (this.players[this.ranks[i]].getTeam() == winTeam) {
				this.dealer = this.players[this.ranks[i]].getIndex();
				break;
			}
		}
		// 牌桌
		setState(TableState.CLOSE);
		// 通知
		for (GamePlayer otherPlayer : this.players) {
			otherPlayer.getPlayerContext().write(builder);
		}

	}

	/**
	 * 准备
	 */
	public void ready(GamePlayer player) {
		if (player.getState() != PlayerState.OPERATE) {
			logger.error("Player state is not operate {} {}", player.getState(), player.getId());
			return;
		}
		if (this.state != TableState.CLOSE) {
			logger.error("Table state is not allow {} {}", this.state, player.getId());
			return;
		}
		player.setState(PlayerState.READY);
		// 全部准备，开始游戏
		if (isSameState(PlayerState.READY)) {
			reset();
			deal();
		}
	}

	/**
	 * 解散牌桌
	 */
	protected abstract void dissolveTable();

	/**
	 * 退出
	 */
	public void quit(GamePlayer gamePlayer, int isInActi) {
		if (this.state == TableState.CLOSE) {
			dissolveTable();
		} else {
			gamePlayer.setIsAuto(1);
			// 主动退出
			if (isInActi == 1) {
				gamePlayer.getPlayerContext().setGamePlayer(null);
				gamePlayer.setQuitState(2);
				gamePlayer.getPlayerContext().write(Quit_.getDefaultInstance());
			} else {
				gamePlayer.setQuitState(1);
			}
			// 通知
			noticeAssist.notice(this);
		}
	}

	/**
	 * 托管
	 */
	public void auto(GamePlayer gamePlayer, int isAuto) {
		if (this.state == TableState.CLOSE) {
			logger.error("Table state is not allow {} {}", this.state, gamePlayer.getId());
			return;
		}
		gamePlayer.setIsAuto(isAuto);
		// 通知
		noticeAssist.notice(this);

	}

	/**
	 * 重连
	 */
	public void reconnect(GamePlayer gamePlayer) {
		gamePlayer.setIsAuto(0);
		// 通知
		noticeAssist.notice(this);
	}

	/**
	 * 玩家操作超时
	 */
	public void doWaitGamePlayer(GamePlayer gamePlayer) {
		if (gamePlayer.getState() != PlayerState.OPERATE)
			return;
		gamePlayer.getTable().getActor().check(gamePlayer);
		// 通知
		noticeAssist.notice(this);
	}

	/**
	 * 牌桌等待超时
	 */
	public void doWaitTable() {
		if (this.state == TableState.DOUBLES) {
			// 加倍超时
			for (GamePlayer otherGamePlayer : this.players)
				otherGamePlayer.setState(PlayerState.WAIT);
			doublesToDraw();
		} else if (this.state == TableState.CLOSE) {
			dissolveTable();
		}
		// 通知
		noticeAssist.notice(this);
	}

	/**
	 * 获取任意一方的人数
	 */
	private int getTeamCount(Team team) {
		int count = 0;
		for (GamePlayer otherPlayer : this.players) {
			if (team == otherPlayer.getTeam())
				count++;
		}
		return count;
	}

	/**
	 * 获取最后名的玩家
	 */
	private GamePlayer getLastPlayer() {
		GamePlayer lastPlayer = null;
		for (GamePlayer otherPlayer : this.players) {
			if (otherPlayer.getState() != PlayerState.FINISH) {
				lastPlayer = otherPlayer;
				break;
			}
		}
		return lastPlayer;
	}

	/**
	 * 添加排行
	 */
	private int addToRanks(GamePlayer player) {
		int rank = -1;
		for (int i = 0; i < this.ranks.length; i++) {
			if (this.ranks[i] == null) {
				this.ranks[i] = player.getIndex();
				rank = i;
				break;
			}
		}
		if (rank == -1) {
			logger.error("{} Rank is error {}", player.getId(), rank);
		}
		return rank;
	}

	/**
	 * 排行数量
	 */
	private int getRanksCount() {
		int count = 0;
		for (int i = 0; i < this.ranks.length; i++) {
			if (this.ranks[i] != null)
				count++;
			else
				break;
		}
		return count;
	}

	/**
	 * 是否完成
	 */
	private boolean isFinish(GamePlayer player) {
		for (Card card : player.getHandCards()) {
			if (card != null)
				return false;
		}
		return true;
	}

	/**
	 * 加倍状态切换到出牌状态
	 */
	private void doublesToDraw() {
		// 牌桌
		setState(TableState.DRAW);
		// 玩家
		GamePlayer player = this.players[this.callOp];
		player.setState(PlayerState.OPERATE);
	}

	/**
	 * 叫牌切换到加倍状态
	 */
	private void callToDoubles() {
		// 没人叫牌则重新开始
		if (this.callOp == null) {
			reset();
			deal();
		} else {
			// 牌桌
			setState(TableState.DOUBLES);
			// 玩家
			for (GamePlayer otherPlayer : this.players)
				otherPlayer.setState(PlayerState.OPERATE, false, 0);
		}
	}

	/**
	 * 处理下家状态
	 */
	private void doNextPlayerState(GamePlayer player) {
		GamePlayer nextPlayer = null;
		if (player.getState() == PlayerState.FINISH) {
			// 队友接风
			for (GamePlayer otherPlayer : this.players) {
				if (player.equals(otherPlayer))
					continue;
				if (player.getTeam() == otherPlayer.getTeam()) {
					nextPlayer = otherPlayer;
					break;
				}
			}

		}
		// 没有队友时下家接风
		if (nextPlayer == null)
			nextPlayer = players[(player.getIndex() + 1) % 4];
		nextPlayer.setState(PlayerState.OPERATE);
	}

	/**
	 * 是否是同一状态
	 */
	private boolean isSameState(PlayerState playerState) {
		for (GamePlayer otherPlayer : this.players) {
			if (otherPlayer.getState() != playerState)
				return false;
		}
		return true;
	}

	/**
	 * 增加公共倍数
	 */
	private void addMultiple(Object o, Card[] cards) {
		MultipleType multiple = MultipleType.getMultiple(o, cards);
		if (multiple != null) {
			this.multiples[multiple.ordinal()] += multiple.getValue();
		}
	}

	/**
	 * 扣除公共倍数
	 */
	private void eddMultiple(Object o, Card[] cards) {
		MultipleType multiple = MultipleType.getMultiple(o, cards);
		if (multiple != null && this.multiples[multiple.ordinal()] >= multiple.getValue()) {
			this.multiples[multiple.ordinal()] -= multiple.getValue();
		}
	}

	/**
	 * 设置状态
	 */
	private void setState(TableState state) {
		// 处理前面的状态
		if (this.state == TableState.DOUBLES || this.state == TableState.CLOSE) {
			this.site.getWaitTableQueue().remove(this);
			this.waitTime = null;
		}
		this.state = state;
		// 处理之后的状态
		if (this.state == TableState.DOUBLES)
			this.waitTime = TimeUtil.getCurrTime() + DOUBLES_WAIT_TIME;
		else if (this.state == TableState.CLOSE)
			this.waitTime = TimeUtil.getCurrTime() + CLOSE_WAIT_TIME;
		else
			return;
		this.site.getWaitTableQueue().put(this);
	}

	@Override
	public int compareTo(Delayed o) {
		if (this.getDelay(TimeUnit.MILLISECONDS) > o.getDelay(TimeUnit.MILLISECONDS)) {
			return 1;
		} else if (this.getDelay(TimeUnit.MILLISECONDS) < o.getDelay(TimeUnit.MILLISECONDS)) {
			return -1;
		}
		return 0;
	}

	@Override
	public long getDelay(TimeUnit unit) {
		return unit.convert(waitTime - System.currentTimeMillis(), TimeUnit.MILLISECONDS);
	}

	public Card[] getCards() {
		return cards;
	}

	public GamePlayer[] getPlayers() {
		return players;
	}

	public int getRoundScore() {
		return roundScore;
	}

	public Card getCallCard() {
		return callCard;
	}

	public CallType getCallType() {
		return callType;
	}

	public Integer getCallOp() {
		return callOp;
	}

	public int[] getMultiples() {
		return multiples;
	}

	public Card[] getLastCards() {
		return lastCards;
	}

	public CardType getLastCardType() {
		return lastCardType;
	}

	public Integer getLastOp() {
		return lastOp;
	}

	public int getDealer() {
		return dealer;
	}

	public Long getWaitTime() {
		return waitTime;
	}

	public Integer[] getRanks() {
		return ranks;
	}

	public TableState getState() {
		return state;
	}

	public Site getSite() {
		return site;
	}

	public TableActor getActor() {
		return actor;
	}

	public _Table.Builder getTableBuilder() {
		return tableBuilder;
	}

	public _GamePlayer.Builder getGamePlayerBuilder() {
		return gamePlayerBuilder;
	}

	public _Card.Builder getCardBuilder() {
		return cardBuilder;
	}

}
