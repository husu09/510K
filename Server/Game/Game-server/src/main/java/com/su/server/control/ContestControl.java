package com.su.server.control;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.core.game.ContestSite;
import com.su.msg.ContestMsg.Apply;
import com.su.msg.ContestMsg.Apply_;
import com.su.msg.ContestMsg.CancelApply;
import com.su.msg.ContestMsg.EnterContestSite;
import com.su.msg.ContestMsg.EnterContestSite_;
import com.su.msg.ContestMsg.ExitContestSite;
import com.su.msg.ContestMsg.ExitContestSite_;
import com.su.server.service.ContestSiteService;

@Controller
public class ContestControl {

	@Autowired
	private ContestSiteService contestService;

	/**
	 * 进入比赛场
	 */
	@Action
	public void enter(PlayerContext playerContext, EnterContestSite req) {
		ContestSite contestSite = contestService.getContestSiteMap().get(req.getSiteId());
		if (contestSite == null) {
			playerContext.sendError(1005);
			return;
		}
		contestService.addToNoticeMap(contestSite.getContestCo().getId(), playerContext);
		playerContext.write(EnterContestSite_.getDefaultInstance());
	}

	/**
	 * 退出比赛场
	 */
	@Action
	public void exit(PlayerContext playerContext, ExitContestSite req) {
		/*contestService.removeFromNoticeMap(req.getSiteId(), playerContext);
		playerContext.write(ExitContestSite_.getDefaultInstance());*/
	}

	/**
	 * 报名
	 */
	@Action
	public void apply(PlayerContext playerContext, Apply req) {
		ContestSite contestSite = contestService.getContestSiteMap().get(req.getSiteId());
		if (contestSite == null) {
			playerContext.sendError(1005);
			return;
		}
		// 游戏开始，清空通知列表
		if (contestSite.apply(playerContext)) {
			Set<PlayerContext> playerConSet = contestService.getNoticeMap().get(contestSite.getContestCo().getId());
			if (playerConSet != null)
				playerConSet.clear();
		} else {
			// 通知场内的玩家
			contestService.noticePlayerBySite(contestSite.getContestCo().getId(),
					contestService.serialize(contestSite));
		}
		playerContext.write(Apply_.getDefaultInstance());
	}
	
	/**
	 * 取消报名
	 * */
	@Action
	public void cancelApply(PlayerContext playerContext, CancelApply req) {
		/*ContestSite contestSite = contestService.getContestSiteMap().get(req.getSiteId());
		if (contestSite == null) {
			playerContext.sendError(1005);
			return;
		}*/
		
	}
}
