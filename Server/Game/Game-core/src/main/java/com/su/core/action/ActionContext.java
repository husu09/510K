package com.su.core.action;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

/**
 * 存储协议处理对象
 * */
@Component
public class ActionContext {
	
	private Map<String, ActionMeta> actionMetaMap = new HashMap<>();

	public Map<String, ActionMeta> getActionMetaMap() {
		return actionMetaMap;
	}
	
	
}
