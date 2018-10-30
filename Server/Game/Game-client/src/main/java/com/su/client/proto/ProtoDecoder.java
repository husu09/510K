package com.su.client.proto;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToMessageDecoder;
import io.netty.util.CharsetUtil;

@Sharable
@Component
public class ProtoDecoder extends MessageToMessageDecoder<ByteBuf> {

	private Logger logger = LoggerFactory.getLogger(ProtoDecoder.class);

	@Autowired
	private ProtoContext protoContext;

	@Override
	protected void decode(ChannelHandlerContext ctx, ByteBuf msg, List<Object> out) throws Exception {
		// [总长度|消息名称长度|消息名称数据|数据长度|数据]
		int nameLen = IntConvert.readInt(msg);
		byte[] nameData = new byte[nameLen];
		msg.readBytes(nameData);
		String messageName = new String(nameData, CharsetUtil.UTF_8);
		if (!protoContext.getMessageLiteMap().containsKey(messageName)) {
			logger.error("not fined message is {}", messageName);
			return;
		}
		int dataLen = IntConvert.readInt(msg);
		byte[] data = new byte[dataLen];
		msg.readBytes(data);
		MessageLite messageLite = protoContext.getMessageLiteMap().get(messageName).getDefaultInstanceForType()
				.getParserForType().parseFrom(data);
		out.add(messageLite);
	}
	
}
