package com.su.server.service;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.constant.RankingConst;
import com.su.common.po.Player;
import com.su.core.context.PlayerContext;
import com.su.core.data.RedisClient;
import com.su.msg.RankingMsg.RankingMo;

import redis.clients.jedis.Tuple;

@Service
public class RankingService {
	@Autowired
	private RedisClient redisClient;
	@Autowired
	private PlayerService playerService;
	
	private Logger logger = LoggerFactory.getLogger(RankingService.class);
	
	/**
	 * 根据排行榜类型获取 key
	 * */
	private String getKey(int rankingType) {
		String key = null;
		if (rankingType == RankingConst.TYPE_LEVEL) {
			key = "RANKING_LEVEL";
		} else if (rankingType == RankingConst.TYPE_TITLE) {
			key = "RANKING_TITLE";
		} else if (rankingType == RankingConst.TYPE_WIN) {
			key = "RANKING_WIN";
		} else {
			throw new RuntimeException("ranking type is null");
		}
		return key;
	}
	
	/**
	 * 添加到排行榜
	 * */
	public void addToRanking(int rankingType, long score, long member) {
		String key = getKey(rankingType);
		redisClient.zadd(key, score, String.valueOf(member));
		// 当排行榜中的数据超过一定数量时执行删除操作
		long len = redisClient.zcard(key);
		if (len >= RankingConst.RANKING_LEN * 2) {
			redisClient.zremrangeByRank(key, 0, len - RankingConst.RANKING_LEN - 1);
		}
	}
	
	/**
	 * 获取成员排名
	 * */
	public long getRanking(int rankingType, long member) {
		return redisClient.zrevrank(getKey(rankingType), String.valueOf(member));
	}
	
	/**
	 * 根据排名区间获取排行榜 (默认获取前 100 )
	 * */
	public Set<Tuple> getRankings(int rankingType) {
		return redisClient.zrangeWithScores(getKey(rankingType), 0, 99);
	}
	
}
