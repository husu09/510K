package com.su.core.game;

import com.su.config.SiteCo;
import com.su.core.context.PlayerContext;

/**
 * 牌局结果
 * */
public class TableResult {
	private PlayerContext playerContext;
	/**
	 * 倍数
	 * */
	private int multiple;
	/**
	 * 是否胜利
	 * */
	private boolean isWin;
	
	private SiteCo siteCo;
	
	public PlayerContext getPlayerContext() {
		return playerContext;
	}
	public void setPlayerContext(PlayerContext playerContext) {
		this.playerContext = playerContext;
	}
	public int getMultiple() {
		return multiple;
	}
	public void setMultiple(int multiple) {
		this.multiple = multiple;
	}
	public boolean isWin() {
		return isWin;
	}
	public void setWin(boolean isWin) {
		this.isWin = isWin;
	}
	public SiteCo getSiteCo() {
		return siteCo;
	}
	public void setSiteCo(SiteCo siteCo) {
		this.siteCo = siteCo;
	}
}
