package com.su.core.proto;

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
		int totalLen = computeRawVarint32Size(nameData.length) + nameData.length + computeRawVarint32Size(data.length)
				+ data.length;
		out.ensureWritable(totalLen);
		writeRawVarint32(out, totalLen);
		writeRawVarint32(out, nameData.length);
		out.writeBytes(nameData);
		writeRawVarint32(out, data.length);
		out.writeBytes(data);
	}

	/**
	 * Writes protobuf varint32 to (@link ByteBuf).
	 * 
	 * @param out
	 *            to be written to
	 * @param value
	 *            to be written
	 */
	static void writeRawVarint32(ByteBuf out, int value) {
		while (true) {
			if ((value & ~0x7F) == 0) {
				out.writeByte(value);
				return;
			} else {
				out.writeByte((value & 0x7F) | 0x80);
				value >>>= 7;
			}
		}
	}

	/**
	 * Computes size of protobuf varint32 after encoding.
	 * 
	 * @param value
	 *            which is to be encoded.
	 * @return size of value encoded as protobuf varint32.
	 */
	static int computeRawVarint32Size(final int value) {
		if ((value & (0xffffffff << 7)) == 0) {
			return 1;
		}
		if ((value & (0xffffffff << 14)) == 0) {
			return 2;
		}
		if ((value & (0xffffffff << 21)) == 0) {
			return 3;
		}
		if ((value & (0xffffffff << 28)) == 0) {
			return 4;
		}
		return 5;
	}

}
