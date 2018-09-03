package com.su.core.context;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;

/**
 * 存储所有在线用户
 */
@Component
public class GameContext {
	/**
	 * 是否接受请求
	 * */
	private volatile boolean accept;
	
	/**
	 * 在线玩家
	 * */
	private Map<Long, PlayerContext> playerContextMap = new ConcurrentHashMap<>();

	public Map<Long, PlayerContext> getPlayerContextMap() {
		return playerContextMap;
	}

	public boolean isAccept() {
		return accept;
	}

	public void setAccept(boolean accept) {
		this.accept = accept;
	}

	
		
}
