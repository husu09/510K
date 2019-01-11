package com.su.client.core;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.su.client.handler.ReceiveMessageHandler;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.http.DefaultHttpHeaders;
import io.netty.handler.codec.http.HttpClientCodec;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.websocketx.WebSocketClientHandshakerFactory;
import io.netty.handler.codec.http.websocketx.WebSocketVersion;
import io.netty.handler.codec.http.websocketx.extensions.compression.WebSocketClientCompressionHandler;

@Component
public final class WebSocketClient {

    private String str = "ws://%s:%s/websocket";
    private EventLoopGroup group;
    
    @Autowired
	private WebSocketClientHandler handler;
    
    public void start(String host, int port) {
    	
        try {
        	URI uri = new URI(String.format(str, host, port));
            group = new NioEventLoopGroup();
            // Connect with V13 (RFC 6455 aka HyBi-17). You can change it to V08 or V00.
            // If you change it to V00, ping is not supported and remember to change
            // HttpResponseDecoder to WebSocketHttpResponseDecoder in the pipeline.
            handler.setHandshaker(WebSocketClientHandshakerFactory.newHandshaker(
                            		uri, WebSocketVersion.V13, null, true, new DefaultHttpHeaders()));

            Bootstrap b = new Bootstrap();
            b.group(group)
             .channel(NioSocketChannel.class)
             .handler(new ChannelInitializer<SocketChannel>() {
                 @Override
                 protected void initChannel(SocketChannel ch) {
                     ChannelPipeline p = ch.pipeline();
                     p.addLast(
                             new HttpClientCodec(),
                             new HttpObjectAggregator(8192),
                             WebSocketClientCompressionHandler.INSTANCE,
                             handler);
                 }
             });

            b.connect(uri.getHost(), port).sync().channel();
            handler.handshakeFuture().sync();

        } catch(Exception e) {
        	e.printStackTrace();
        }
    
    }
    
    public void stop() {
		if (group != null) {
			group.shutdownGracefully();
		}
	}

}
