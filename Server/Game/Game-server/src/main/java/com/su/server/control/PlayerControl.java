package com.su.server.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.po.Player;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.msg.PlayerMsg.GetPlayer;
import com.su.msg.PlayerMsg.GetPlayerTo;
import com.su.msg.PlayerMsg.PlayerMo;
import com.su.server.service.PlayerService;

@Controller
public class PlayerControl {
	
	@Autowired
	private PlayerService playerService;
	
	/**
	 * 获取玩家信息
	 * */
	@Action
	public void getPlayer(PlayerContext ctx, GetPlayer req) {
		Player player = playerService.getPlayer(ctx.getPlayerId());
		if (player == null) {
			ctx.sendError(2001);
			return;
		}
		PlayerMo playerMo = playerService.serializePlayer(player);
		GetPlayerTo.Builder resp = GetPlayerTo.newBuilder();
		resp.setPlayer(playerMo);
		ctx.write(resp);
	}
}
