package com.su.client;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.su.client.config.ClientConfig;
import com.su.client.core.ClientUI;
import com.su.client.proto.ProtoScan;

public class ClientStart {
	
	public static void main(String[] args) throws Exception {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(ClientConfig.class);
		ProtoScan protoScan = context.getBean(ProtoScan.class);
		protoScan.init();
		ClientUI clientUI = context.getBean(ClientUI.class);
		// 显示UI
		clientUI.show();
	}
}
