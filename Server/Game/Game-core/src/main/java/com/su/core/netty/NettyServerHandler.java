/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.su.core.netty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.su.core.akka.AkkaContext;
import com.su.core.akka.PLayerActorImpl;
import com.su.core.akka.PlayerActor;
import com.su.core.context.GameContext;
import com.su.core.context.PlayerContext;

import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.Attribute;
import io.netty.util.AttributeKey;

/**
 * Handles both client-side and server-side handler depending on which
 * constructor was called.
 */
@Sharable
@Component
public class NettyServerHandler extends ChannelInboundHandlerAdapter {

	@Autowired
	private GameContext gameContext;

	public static final AttributeKey<PlayerContext> PLAYER_CONTEXT_KEY = AttributeKey.valueOf("PLAYER_CONTEXT_KEY");
	public static final AttributeKey<PlayerActor> PROCESSOR_ACTOR_KEY = AttributeKey.valueOf("PROCESSOR_ACTOR_KEY");

	@Override
	public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
		Attribute<PlayerActor> attr = ctx.channel().attr(PROCESSOR_ACTOR_KEY);
		PlayerActor actionActor = attr.get();
		if (actionActor != null) {
			actionActor.process(ctx, (MessageLite) msg);
		} else {
			actionActor = AkkaContext.createActor(PlayerActor.class, PLayerActorImpl.class);
			attr.set(actionActor);
			actionActor.process(ctx, (MessageLite) msg);
		}
	}

	@Override
	public void channelActive(ChannelHandlerContext ctx) throws Exception {
		// 不接受请求，拒绝连接
		if (!gameContext.isAccept()) {
			ctx.close();
		}
	}

	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
		PlayerContext playerContext = ctx.channel().attr(PLAYER_CONTEXT_KEY).get();
		PlayerActor processorActor = ctx.channel().attr(PROCESSOR_ACTOR_KEY).get();
		if (playerContext != null) {
			if (playerContext.getPlayerId() != 0) {
				// 退出事件
				playerContext.getActor().logout(playerContext);
				// 从所有玩家上下文移除
				gameContext.getPlayerContextMap().remove(playerContext.getPlayerId());
			}
		}
		if (processorActor != null) {
			// 关闭 actor
			AkkaContext.poisonPill(processorActor);
		}
	}

	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
		cause.printStackTrace();
		ctx.close();
	}

}
