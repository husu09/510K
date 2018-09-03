package com.su.client.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.su.client.core.ClientContext;

/**
 * 接收协议返回消息
 * */
@Component
public class ReceiveMessageHandler {
	
	@Autowired
	private ClientContext clientContext;
	

	public void process(MessageLite messageLite) {
		clientContext.showMessage(messageLite);
	}

}
