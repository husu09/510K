package com.su.core.akka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.protobuf.MessageLite;
import com.su.common.po.Player;
import com.su.common.util.SpringUtil;
import com.su.core.action.ActionContext;
import com.su.core.action.ActionMeta;
import com.su.core.context.PlayerContext;
import com.su.core.event.GameEventDispatcher;
import com.su.core.game.TableResult;
import com.su.core.game.service.BridgeService;
import com.su.core.netty.NettyServerHandler;
import com.su.msg.LoginMsg.Login_;
import com.su.msg.PlayerMsg.UpdatePlayer_;
import com.su.msg.TableMsg._GamePlayerResult;

import io.netty.channel.ChannelHandlerContext;
import io.netty.util.Attribute;

public class PLayerActorImpl implements PlayerActor {

	private Logger logger = LoggerFactory.getLogger(PlayerActor.class);

	private ActionContext actionContext = SpringUtil.getContext().getBean(ActionContext.class);
	private GameEventDispatcher gameEventDispatcher = SpringUtil.getContext().getBean(GameEventDispatcher.class);
	private BridgeService bridgeService =  SpringUtil.getContext().getBean(BridgeService.class);


	@Override
	public void process(ChannelHandlerContext ctx, MessageLite messageLite) {
		try {
			ActionMeta actionMeta = actionContext.getActionMetaMap().get(messageLite.getClass().getSimpleName());
			if (actionMeta == null) {
				// 没有找到对应的协议处理类
				logger.error("not find action-meta {}", messageLite.getClass().getSimpleName());
				PlayerContext.sendError(ctx, 10001);
				return;
			}
			Attribute<PlayerContext> attr = ctx.channel().attr(NettyServerHandler.PLAYER_CONTEXT_KEY);
			PlayerContext playerContext = attr.get();
			if (actionMeta.isMustLogin()) {
				if (playerContext == null) {
					// 没有找到对应的PlayerContext
					logger.error("not find player context");
					PlayerContext.sendError(ctx, 10001);
					return;
				}
				playerContext.getBuilder().clear();
				actionMeta.getMethod().invoke(actionMeta.getExecutor(), playerContext, messageLite);
			} else {
				if (playerContext == null)
					playerContext = new PlayerContext();
				playerContext.setCtx(ctx);
				playerContext.setActor(this);
				actionMeta.getMethod().invoke(actionMeta.getExecutor(), playerContext, messageLite);
			}
			// 玩家数据更新通知
			if (playerContext.isNotice())
				playerContext.write(UpdatePlayer_.newBuilder().setPlayer(playerContext.getBuilder()));

		} catch (Exception e) {
			e.printStackTrace();
			// 系统错误
			PlayerContext.sendError(ctx, 10001);
		}

	}

	@Override
	public void logout(PlayerContext playerContext) {
		gameEventDispatcher.logout(playerContext);

	}

	@Override
	public void checkRefresh(PlayerContext playerContext) {

	}

	@Override
	public void login(PlayerContext playerContext, Login_.Builder builder) {
		gameEventDispatcher.login(playerContext, builder);
	}

	@Override
	public _GamePlayerResult doTableResult(TableResult tableResult) {
		return bridgeService.doTableResult(tableResult);
	}

	@Override
	public void doContestClose(int ranking) {
		bridgeService.doContestClose(ranking);
	}

	@Override
	public Player getPlayerById(long id) {
		return bridgeService.getPlayerById(id);
	}

}
