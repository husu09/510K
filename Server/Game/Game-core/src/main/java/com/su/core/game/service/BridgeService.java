package com.su.core.game.service;

import java.util.Collection;
import java.util.Map;

import com.su.common.po.Player;
import com.su.core.game.Site;
import com.su.core.game.TableResult;
import com.su.msg.TableMsg._GamePlayerResult;

/**
 * GameServer向外提供服务的接口
 * */
public interface BridgeService {
	/**
	 * 获取所有场
	 * */
	public Collection<Site> getSiteSet();
	/**
	 * 处理牌局结束
	 * */
	public _GamePlayerResult doTableResult(TableResult tableResult);
	/**
	 * 处理比赛结束
	 * */
	public void doContestClose(int ranking);
	/**
	 * 获取用户
	 * */
	public Player getPlayerById(long id);
	
}
