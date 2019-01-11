package com.su.core.netty;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.codec.http.websocketx.extensions.compression.WebSocketServerCompressionHandler;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
@Component
public final class WebSocketServer {
	
	private Logger logger = LoggerFactory.getLogger(WebSocketServer.class);
	
	private static final String WEBSOCKET_PATH = "/websocket";

	@Autowired
	private  WebSocketHandler webSocketHandler;

	@Value("${server.port}")
	private int port;
	
	private EventLoopGroup bossGroup = null;
	private EventLoopGroup workerGroup = null;
	
	public void start() {
		   bossGroup = new NioEventLoopGroup(1);
	         workerGroup = new NioEventLoopGroup();
	        try {
	            ServerBootstrap b = new ServerBootstrap();
	            b.group(bossGroup, workerGroup)
	             .channel(NioServerSocketChannel.class)
	             .handler(new LoggingHandler(LogLevel.INFO))
	             .childHandler(new ChannelInitializer<SocketChannel>() {

					@Override
					protected void initChannel(SocketChannel ch) throws Exception {
						ChannelPipeline pipeline = ch.pipeline();
						pipeline.addLast(new HttpServerCodec());
				        pipeline.addLast(new HttpObjectAggregator(65536));
				        pipeline.addLast(new WebSocketServerCompressionHandler());
				        pipeline.addLast(new WebSocketServerProtocolHandler(WEBSOCKET_PATH, null, true));
				        pipeline.addLast(webSocketHandler);
					}
	            	 
				});
	           b.bind(port).sync().channel();
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
