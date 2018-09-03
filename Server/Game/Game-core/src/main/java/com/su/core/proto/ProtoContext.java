package com.su.core.proto;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;

@Component
public class ProtoContext {

	private Map<String, MessageLite> MessageLiteMap = new HashMap<>();

	public Map<String, MessageLite> getMessageLiteMap() {
		return MessageLiteMap;
	}
	
}
