package com.su.client.proto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;

@Component
public class ProtoContext {

	private Map<String, MessageLite> MessageLiteMap = new HashMap<>();
	
	/**
	 * 协议文件名称，[协议]
	 * */
	private Map<String, List<MessageLite>>  messageListeSortMap = new HashMap<>();

	public Map<String, MessageLite> getMessageLiteMap() {
		return MessageLiteMap;
	}

	public Map<String, List<MessageLite>> getMessageListeSortMap() {
		return messageListeSortMap;
	}
	
	public void addSortMessageLite(String superName, MessageLite messageLite) {
		List<MessageLite> messageLiteList = messageListeSortMap.get(superName);
		if (messageLiteList == null) {
			messageLiteList = new ArrayList<>();
			messageListeSortMap.put(superName, messageLiteList);
		}
		messageLiteList.add(messageLite);
	}
	
	
}
