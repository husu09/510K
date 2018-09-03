package com.su.server.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.constant.SysAttr;
import com.su.common.po.Player;
import com.su.common.po.PlayerDetail;
import com.su.config.RankingCo;
import com.su.core.game.TableResult;
import com.su.core.game.enums.SiteType;
import com.su.excel.mapper.RankingConf;
import com.su.msg.TableMsg._GamePlayerResult;

@Service
public class PlayerGameService {

	@Autowired
	private PlayerService playerService;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private RankingConf rankingConf;

	private Logger logger = LoggerFactory.getLogger(PlayerGameService.class);

	/**
	 * 牌局结束处理
	 */
	public _GamePlayerResult doTableResult(TableResult tableResult) {
		// 比赛模式不处理
		if (tableResult.getSiteCo().getSiteType() != SiteType.CLASSIC.getValue()
				&& tableResult.getSiteCo().getSiteType() == SiteType.RANKING.getValue())
			return null;

		Player player = playerService.getPlayerById(tableResult.getPlayerContext().getPlayerId());
		PlayerDetail playerDetail = playerService.getPlayerDetail(player.getId());
		_GamePlayerResult.Builder builder = _GamePlayerResult.newBuilder();

		if (tableResult.isWin()) {
			// 胜利
			playerDetail.setContinueWinCount(playerDetail.getContinueWinCount() + 1);
			// 获得的花生
			int addPeanut = tableResult.getMultiple() * tableResult.getSiteCo().getBaseScore();
			// 加成
			addPeanut = addPeanut + addPeanut * (tableResult.getSiteCo().getRankingAddition() / 100);
			resourceService.add(tableResult.getPlayerContext(), SysAttr.PEANUT, 0, addPeanut, 1002);
			builder.setPlayerId(player.getId());
			builder.setMultiple(tableResult.getMultiple());
			builder.setPeanut(addPeanut);

			// 处理竞技分
			if (tableResult.getSiteCo().getSiteType() == SiteType.RANKING.getValue()) {
				resourceService.add(tableResult.getPlayerContext(), SysAttr.RANKING, 0, 20, 1002);
				builder.setRankingScore(20);
			}

		} else {
			// 失败
			playerDetail.setContinueWinCount(0);
			// 扣除的花生
			int eddPeanut = tableResult.getMultiple() * tableResult.getSiteCo().getBaseScore();
			resourceService.edd(tableResult.getPlayerContext(), SysAttr.PEANUT, 0, eddPeanut, 2002);
			builder.setPlayerId(player.getId());
			builder.setMultiple(tableResult.getMultiple());
			builder.setPeanut(eddPeanut);
			// 处理竞技分
			if (tableResult.getSiteCo().getSiteType() == SiteType.RANKING.getValue()) {
				RankingCo rankingCo = null;
				if (player.getRankingStep() == 0)
					rankingCo = rankingConf.all().get(0);
				else
					rankingCo = rankingConf.get(player.getRankingStep());
				if (rankingCo == null) {
					logger.error("rankingCo is null");
					return null;
				}
				int eddRankingScore = rankingCo.getEddScoreRate() / 100 * 20;
				resourceService.add(tableResult.getPlayerContext(), SysAttr.RANKING, 0, eddRankingScore, 1002);
				builder.setRankingScore(eddRankingScore);
			}

		}
		return builder.build();
	}

	public void doContestClose(int ranking) {

	}
}
