package com.su.server.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentSkipListSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.config.ContestCo;
import com.su.core.context.PlayerContext;
import com.su.core.event.GameEventAdapter;
import com.su.core.game.ContestSite;
import com.su.excel.mapper.ContestConf;
import com.su.excel.mapper.ContestRewardConf;
import com.su.msg.ContestMsg.NoticeContestSite_;

@Service
public class ContestSiteService extends GameEventAdapter {

	private Map<Integer, ContestSite> contestSiteMap = new HashMap<>();
	
	/**
	 * 进入比赛声，需要通知的玩家
	 * */
	private Map<Integer, Set<PlayerContext>> noticeMap = new ConcurrentHashMap<>();

	@Autowired
	private ContestConf contestConf;
	@Autowired
	private ContestRewardConf contestRewardConf;

	@Override
	public void serverStart() {
		for (ContestCo co : contestConf.all()) {
			contestSiteMap.put(co.getId(), new ContestSite(co, contestRewardConf.getRewardCount(co.getId())));
		}
	}

	public Map<Integer, ContestSite> getContestSiteMap() {
		return contestSiteMap;
	}
	
	/**
	 * 加入到通知集合
	 * */
	public void addToNoticeMap(int contestSiteId, PlayerContext playerContext) {
		Set<PlayerContext> playerConSet = noticeMap.get(contestSiteId);
		if (playerConSet == null) {
			playerConSet = new ConcurrentSkipListSet<>();
			if (noticeMap.putIfAbsent(contestSiteId, playerConSet) != null) 
				playerConSet = noticeMap.get(contestSiteId);
		}
		playerConSet.add(playerContext);
	}
	
	/**
	 * 从通知集合中删除
	 * */
	public void removeFromNoticeMap(int contestSiteId, PlayerContext playerContext) {
		Set<PlayerContext> playerConSet = noticeMap.get(contestSiteId);
		if (playerConSet != null)
			playerConSet.remove(playerContext);
	}
	
	/**
	 * 通知集合中的玩家
	 * */
	public void noticePlayerBySite(int contestSiteId, NoticeContestSite_ builder) {
		Set<PlayerContext> playerConSet = noticeMap.get(contestSiteId);
		for (PlayerContext playerContext : playerConSet) {
			playerContext.write(builder);
		}
	}
	
	public Map<Integer, Set<PlayerContext>> getNoticeMap() {
		return noticeMap;
	}

	public NoticeContestSite_ serialize(ContestSite site) {
		NoticeContestSite_.Builder builder = NoticeContestSite_.newBuilder();
		builder.setSiteId(site.getContestCo().getId());
		builder.setPlayerNum(site.getPlayerNum());
		return builder.build();
	}
}
