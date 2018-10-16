package com.su.core.proto;

import io.netty.buffer.ByteBuf;

/**
 * byte 数组与 int 的相互转换
 * */
public class IntConvert {
	
	private static int byteArrayToInt(byte[] b) {
		return b[0] & 0xFF | 
				(b[1] & 0xFF) << 8 | 
				(b[2] & 0xFF) << 16 | 
				(b[3] & 0xFF) << 24;
	}

	private static  byte[] intToByteArray(int a) {
		return new byte[] { 
				(byte) (a & 0xFF), 
				(byte) ((a >> 8) & 0xFF), 
				(byte) ((a >> 16) & 0xFF),
				(byte) ((a >> 24) & 0xFF) 
				};
	}
	
	/**
	 * 从 ByteBuf 中读取 int
	 * */
	public static int readInt(ByteBuf in) {
		if (in.readableBytes() < 4)
			return 0;
		byte[] bs = new byte[4];
		in.readBytes(bs);
		return byteArrayToInt(bs);
	}
	
	/**
	 * 往 ByteBuf 中写入 int
	 * */
	public static void writeInt(ByteBuf out, int i) {
		out.writeBytes(intToByteArray(i));
	}
	
}
