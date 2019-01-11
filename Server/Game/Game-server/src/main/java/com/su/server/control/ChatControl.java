package com.su.server.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.po.Player;
import com.su.common.util.TimeUtil;
import com.su.core.action.Action;
import com.su.core.context.GameContext;
import com.su.core.context.PlayerContext;
import com.su.msg.Chat.ChatMo;
import com.su.msg.Chat.GetChat;
import com.su.msg.Chat.GetChatTo;
import com.su.msg.Chat.SendChat;
import com.su.server.service.ChatService;
import com.su.server.service.PlayerService;

@Controller
public class ChatControl {
	
	@Autowired
	private PlayerService playerService;
	@Autowired
	private ChatService chatService;
	@Autowired
	private GameContext gameContext;
	
	@Action
	public void GetChat(PlayerContext ctx, GetChat req) {
		GetChatTo.Builder resp = GetChatTo.newBuilder();
		for (ChatMo _Chat : chatService.getChats()) {
			resp.addChat(_Chat);
		}
		ctx.write(resp);
	}
	
	@Action
	public void SendChat(PlayerContext ctx, SendChat req) {
		if (TimeUtil.getCurrTime() < ctx.getLastChatTime() + TimeUtil.ONE_MINUTE) {
			ctx.sendError(8001);
			return;
		}
		String content = chatService.filterMask(req.getContent());
		// 组装聊天信息
		ChatMo.Builder chatMo = ChatMo.newBuilder();
		chatMo.setId(ctx.getPlayerId());
		Player player = playerService.getPlayer(ctx.getPlayerId());
		chatMo.setName(chatMo.getName());
		chatMo.setSex(chatMo.getSex());
		chatMo.setTitle(chatMo.getTitle());
		chatMo.setContent(chatMo.getContent());
		
		for (PlayerContext ctxTo : gameContext.getPlayerContextMap().values()) {
			ctxTo.write(chatMo);
		}
		
		chatService.getChats().add(chatMo.build());
		if (chatService.getChats().size() >= 20) {
			chatService.getChats().remove(0);
		}
		
	}
	
	
}
