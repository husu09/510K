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
import com.su.msg.LoginMsg.LoginTo;
import com.su.msg.TestMsg.TestTo;
import com.su.msg.TestMsg.TestTo.Builder;
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
		if (StringUtil.isNone(req.getAccount())) {
			playerContext.sendError(1002);
			return;
		}
		long playerId = loginService.getIdCacheByAccount(req.getAccount());
		Player player = null;
		if (playerId == -1) {
			// 创建用户
			player = new Player();
			player.setAccount(req.getAccount());
			playerId = playerService.createPlayer(player);
			loginService.addIdCacheByAccount(req.getAccount(), playerId);
			loginService.addPlayerCache(player);
		} else {
			 player = playerService.getPlayer(playerId);
		}
		if (player == null) {
			playerContext.sendError(1001);
			return;
		}
		playerContext.handleLogin(player.getId());
		gameContext.getPlayerContextMap().put(player.getId(), playerContext);
		
		LoginTo.Builder resp = LoginTo.newBuilder();
		resp.setPlayer(playerService.serializePlayer(player));
		// 登录事件
		gameEventDispatcher.login(playerContext, resp);
		playerContext.write(resp);
		
		TestTo.Builder testTo = TestTo.newBuilder();
		//testTo.setAge(10);
		playerContext.write(testTo);
		
	}

}
