package com.su.server.control;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.po.Player;
import com.su.common.util.StringUtil;
import com.su.core.action.Action;
import com.su.core.context.GameContext;
import com.su.core.context.PlayerContext;
import com.su.core.event.GameEventDispatcher;
import com.su.msg.LoginMsg.Login;
import com.su.msg.LoginMsg.Login_;
import com.su.server.service.LoginService;
import com.su.server.service.PlayerService;

@Controller
public class LoginControl {

	Logger logger = LoggerFactory.getLogger(LoginControl.class);

	@Autowired
	private GameContext gameContext;

	@Autowired
	private LoginService loginService;

	@Autowired
	private PlayerService playerService;
	
	@Autowired
	private GameEventDispatcher gameEventDispatcher;

	/**
	 * 登录
	 */
	@Action(mustLogin = false)
	public void login(PlayerContext playerContext, Login req) {
		if (StringUtil.isNone(req.getAccount()) || StringUtil.isNone(req.getName())) {
			logger.error("参数错误{},{}", req.getAccount(), req.getName());
			return;
		}

		long playerId = loginService.getIdCacheByAccount(req.getAccount());
		Player player = null;
		if (playerId == 0) {
			// 创建用户
			player = new Player();
			player.setAccount(req.getAccount());
			player.setName(req.getName());
			playerId = playerService.createPlayer(player);
			if (playerId == 0) {
				playerContext.sendError(20002);
				return;
			}
			loginService.addIdCacheByAccount(req.getAccount(), playerId);
		} else {
			 player = playerService.getPlayerById(playerId);
		}
		if (player == null) {
			playerContext.sendError(20001);
			return;
		}
		playerContext.handleLogin(player.getId());
		gameContext.getPlayerContextMap().put(player.getId(), playerContext);
		
		Login_.Builder resp = Login_.newBuilder();
		resp.setPlayer(playerService.serializePlayer(player));
		// 登录事件
		gameEventDispatcher.login(playerContext, resp);
		playerContext.write(resp);

		loginService.addPlayerCache(player);
	}

}
