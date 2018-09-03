package com.su.common.obj;

import com.su.common.po.Player;
/**
 * 需要缓存的玩家核心数据
 * */
public class PlayerCoreData {
	
	private long id;
	private String name;
	
	public PlayerCoreData(Player player) {
		this.id = player.getId();
		this.name = player.getName();
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	
}
