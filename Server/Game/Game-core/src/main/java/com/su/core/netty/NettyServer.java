package com.su.core.netty;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.su.core.proto.ProtoDecoder;
import com.su.core.proto.ProtoEncoder;
import com.su.core.proto.ProtoLengthDecoder;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;

@Component
public final class NettyServer {

	private Logger logger = LoggerFactory.getLogger(NettyServer.class);

	@Autowired
	private ProtoDecoder protoDecoder;
	@Autowired
	private ProtoEncoder protoEncoder;
	@Autowired
	private NettyServerHandler nettyServerHandler;

	@Value("${server.port}")
	private int port;

	private EventLoopGroup bossGroup = null;
	private EventLoopGroup workerGroup = null;

	public void start() {
		bossGroup = new NioEventLoopGroup();
		workerGroup = new NioEventLoopGroup();
		try {
			ServerBootstrap b = new ServerBootstrap();
			b.group(bossGroup, workerGroup)
			.channel(NioServerSocketChannel.class)
					.handler(new LoggingHandler(LogLevel.INFO))
					.childHandler(new ChannelInitializer<SocketChannel>() {
						@Override
						public void initChannel(SocketChannel ch) throws Exception {
							ChannelPipeline p = ch.pipeline();
							p.addLast(new ProtoLengthDecoder(), protoDecoder, protoEncoder, nettyServerHandler);
						}
					});
			// Bind and start to accept incoming connections.
			b.bind(port).sync();
		} catch (Exception e) {
			e.printStackTrace();
		}
		logger.info("启动Netty服务 {}", port);
	}

	public void stop() {
		bossGroup.shutdownGracefully();
		workerGroup.shutdownGracefully();
		logger.info("关闭Netty服务");
	}

}
