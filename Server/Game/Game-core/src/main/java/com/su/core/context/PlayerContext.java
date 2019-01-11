package com.su.core.context;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.protobuf.MessageLite;
import com.google.protobuf.MessageLiteOrBuilder;
import com.su.common.po.Mail;
import com.su.common.util.LoadUtil;
import com.su.common.util.SpringUtil;
import com.su.core.akka.PlayerActor;
import com.su.core.data.DataService;
import com.su.core.game.GamePlayer;
import com.su.core.game.Site;
import com.su.core.netty.NettyServerHandler;
import com.su.msg.CommonMsg.ErrorNo;
import com.su.msg.PlayerMsg.PlayerMo;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.util.CharsetUtil;
public class PlayerContext {
	
	public final static Logger logger = LoggerFactory.getLogger(PlayerContext.class);
	
	private static final int INT_LENGTH = 4;

	private ChannelHandlerContext ctx;

	private PlayerActor actor;
	
	private long playerId;
	
	private volatile GamePlayer gamePlayer;
	
	
	/**
	 * 聊天时间
	 * */
	private long lastChatTime;
	public long getLastChatTime() {
		return lastChatTime;
	}
	public void setLastChatTime(long lastChatTime) {
		this.lastChatTime = lastChatTime;
	}

	/**
	 * 邮件
	 * */
	private Map<Long, Mail> mailMap;
	public Map<Long, Mail> getMailMap() {
		if (mailMap == null) {
			mailMap = new HashMap<>();
			DetachedCriteria dc = DetachedCriteria.forClass(Mail.class);
			dc.add(Restrictions.eq("playerId", playerId));
			DataService dataService = SpringUtil.getContext().getBean(DataService.class);
			List<Mail> mails = dataService.list(dc);
			for (Mail mail : mails) {
				mailMap.put(mail.getId(), mail);
			}
		}
		return mailMap;
	}

	/**
	 * 匹配中的游戏场
	 * */
	private Site site;
	/**
	 * 是否更新玩家数据
	 * */
	private boolean isNotice;
	/**
	 * 玩家更新数据
	 * */
	private PlayerMo.Builder builder = PlayerMo.newBuilder();
	

	public void handleLogin(long playerId) {
		this.playerId = playerId;
		ctx.channel().attr(NettyServerHandler.PLAYER_CONTEXT_KEY).set(this);
	}

	public void write(MessageLiteOrBuilder msg) {
		if (msg == null)
			return;
		MessageLite messageLite = null;
		if (msg instanceof MessageLite) {
			messageLite = (MessageLite) msg;
		}
		if (msg instanceof MessageLite.Builder) {
			messageLite = ((MessageLite.Builder) msg).build();
		}
		// 编码消息
		String messageName = messageLite.getClass().getSimpleName();
		byte[] data = null;
		if (msg instanceof MessageLite) {
			data = ((MessageLite) msg).toByteArray();
		}
		if (msg instanceof MessageLite.Builder) {
			data = ((MessageLite.Builder) msg).build().toByteArray();
		}
		byte[] nameData = messageName.getBytes(CharsetUtil.UTF_8);
		int totalLen = INT_LENGTH + nameData.length + INT_LENGTH
				+ data.length;
		ByteBuf out = Unpooled.buffer(totalLen);
		out.writeIntLE(totalLen);
		out.writeIntLE(nameData.length);
		out.writeBytes(nameData);
		out.writeIntLE(data.length);
		out.writeBytes(data);
		ctx.channel().writeAndFlush(new BinaryWebSocketFrame(out));
	}

	/**
	 * 发送错误提示
	 */
	public void sendError(int errCode, Object... parameters) {
		String errMsg = LoadUtil.tipMap.get(errCode);
		if (errMsg == null) {
			logger.error("不存在的 errCode {}", errCode);
			return;
		}
		if (parameters.length > 0) {
			errMsg = String.format(errMsg, parameters);
		}
		ErrorNo.Builder builder = ErrorNo.newBuilder().setErrorMsg(errMsg);
		ctx.writeAndFlush(builder.build());
	}

	public static void sendError(ChannelHandlerContext ctx, int errCode, Object... parameters) {
		String errMsg = LoadUtil.tipMap.get(errCode);
		if (errMsg == null) {
			logger.error("不存在的 errCode {}", errCode);
			return;
		}
		if (parameters.length > 0) {
			errMsg = String.format(errMsg, parameters);
		}
		ErrorNo.Builder builder = ErrorNo.newBuilder().setErrorMsg(errMsg);
		ctx.writeAndFlush(builder.build());
	}
	
	public PlayerMo.Builder getBuilder() {
		return builder;
	}

	public ChannelHandlerContext getCtx() {
		return ctx;
	}

	public void setCtx(ChannelHandlerContext ctx) {
		this.ctx = ctx;
	}

	public PlayerActor getActor() {
		return actor;
	}

	public void setActor(PlayerActor actor) {
		this.actor = actor;
	}

	public long getPlayerId() {
		return playerId;
	}

	public GamePlayer getGamePlayer() {
		return gamePlayer;
	}

	public void setGamePlayer(GamePlayer gamePlayer) {
		this.gamePlayer = gamePlayer;
	}

	public boolean isNotice() {
		return isNotice;
	}

	public void setNotice(boolean isNotice) {
		this.isNotice = isNotice;
	}

	public Site getSite() {
		return site;
	}

	public void setSite(Site site) {
		this.site = site;
	}
	
}
