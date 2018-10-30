package com.su.server.control;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.constant.RankingConst;
import com.su.common.po.Player;
import com.su.core.action.Action;
import com.su.core.context.GameContext;
import com.su.core.context.PlayerContext;
import com.su.msg.RankingMsg.GetRanking;
import com.su.msg.RankingMsg.GetRankingTo;
import com.su.msg.RankingMsg.RankingMo;
import com.su.server.service.ChatService;
import com.su.server.service.PlayerService;
import com.su.server.service.RankingService;

import redis.clients.jedis.Tuple;

@Controller
public class RankingControl {
	
	@Autowired
	private PlayerService playerService;
	@Autowired
	private ChatService chatService;
	@Autowired
	private GameContext gameContext;
	@Autowired
	private RankingService  rankingService;
	
	@Action
	public void GetChat(PlayerContext ctx, GetRanking req) {
		if (req.getType() != RankingConst.TYPE_LEVEL ||
				req.getType() != RankingConst.TYPE_LEVEL ||
				req.getType() != RankingConst.TYPE_WIN) {
			ctx.sendError(1002);
			return;
		}
		GetRankingTo.Builder resp = GetRankingTo.newBuilder();
		// 排行数据
		Set<Tuple> tuples = rankingService.getRankings(req.getType());
		RankingMo.Builder _Ranking = RankingMo.newBuilder();
		for (Tuple t : tuples) {
			Player player = playerService.getPlayer(Long.parseLong(t.getElement()));
			_Ranking.setId(player.getId());
			_Ranking.setName(player.getName());
			_Ranking.setSex(player.getSex());
			_Ranking.setTitle(player.getTitle());
			_Ranking.setScore((int)t.getScore());
			resp.addRanking(_Ranking);
		}
		// 我的排名
		long ranking = rankingService.getRanking(req.getType(), ctx.getPlayerId());
		if (ranking > 0)
			resp.setMyRank((int) ranking);
		ctx.write(resp);
	}
	
	
}
