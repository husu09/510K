package com.su.client.proto;

import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.google.protobuf.MessageLiteOrBuilder;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;
import io.netty.util.CharsetUtil;

@Sharable
@Component
public class ProtoEncoder extends MessageToByteEncoder<MessageLiteOrBuilder> {
	
	private static final int INT_LENGTH = 4;
	
	@Override
	protected void encode(ChannelHandlerContext ctx, MessageLiteOrBuilder msg, ByteBuf out) throws Exception {
		// [总长度|消息名称长度|消息名称数据|数据长度|数据]
		String messageName = msg.getClass().getSimpleName();
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
		out.ensureWritable(totalLen);
		IntConvert.writeInt(out, totalLen);
		IntConvert.writeInt(out, nameData.length);
		out.writeBytes(nameData);
		IntConvert.writeInt(out, data.length);
		out.writeBytes(data);
	}
	
}
