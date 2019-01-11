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

import java.util.Arrays;
import java.util.Locale;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.handler.codec.CorruptedFrameException;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;
import io.netty.util.Attribute;
import io.netty.util.AttributeKey;
import io.netty.util.CharsetUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.su.core.akka.AkkaContext;
import com.su.core.akka.PLayerActorImpl;
import com.su.core.akka.PlayerActor;
import com.su.core.context.GameContext;
import com.su.core.context.PlayerContext;
import com.su.core.proto.IntConvert;
import com.su.core.proto.ProtoContext;

@Sharable
@Component
public class WebSocketHandler extends SimpleChannelInboundHandler<WebSocketFrame> {

    private static final Logger logger = LoggerFactory.getLogger(WebSocketHandler.class);
    
    @Autowired
	private GameContext gameContext;
    @Autowired
	private ProtoContext protoContext;

	public static final AttributeKey<PlayerContext> PLAYER_CONTEXT_KEY = AttributeKey.valueOf("PLAYER_CONTEXT_KEY");
	public static final AttributeKey<PlayerActor> PROCESSOR_ACTOR_KEY = AttributeKey.valueOf("PROCESSOR_ACTOR_KEY");
	
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame frame) throws Exception {
        if (frame instanceof BinaryWebSocketFrame) {
        	// 解码消息
        	ByteBuf in = ((BinaryWebSocketFrame)frame).content();
        	
        	in.markReaderIndex();
            int preIndex = in.readerIndex();
            int length = in.readIntLE();
            if (preIndex == in.readerIndex()) {
                return;
            }
            if (length < 0) {
                throw new CorruptedFrameException("negative length: " + length);
            }

            if (in.readableBytes() < length) {
                in.resetReaderIndex();
            } else {
            	ByteBuf msg = in.readRetainedSlice(length);
            	int nameLen = msg.readIntLE();
            	byte[] nameData = new byte[nameLen];
        		msg.readBytes(nameData);
        		String messageName = new String(nameData, CharsetUtil.UTF_8);
        		if (!protoContext.getMessageLiteMap().containsKey(messageName)) {
        			logger.error("not fined message is {}", messageName);
        			return;
        		}
        		int dataLen = msg.readIntLE();
        		byte[] data = new byte[dataLen];
        		msg.readBytes(data);
        		MessageLite messageLite = protoContext.getMessageLiteMap().get(messageName).getDefaultInstanceForType()
        				.getParserForType().parseFrom(data);
        		
        		// 逻辑
        		Attribute<PlayerActor> attr = ctx.channel().attr(PROCESSOR_ACTOR_KEY);
        		PlayerActor actionActor = attr.get();
        		if (actionActor != null) {
        			actionActor.process(ctx, messageLite);
        		} else {
        			actionActor = AkkaContext.createActor(PlayerActor.class, PLayerActorImpl.class);
        			attr.set(actionActor);
        			actionActor.process(ctx, messageLite);
        		}
            }
        } else {
            String message = "unsupported frame type: " + frame.getClass().getName();
            throw new UnsupportedOperationException(message);
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
				// 从在线玩家中移除
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
