package com.su.core.akka;

import com.google.protobuf.MessageLite;
import com.su.common.po.Player;
import com.su.core.context.PlayerContext;
import com.su.core.game.TableResult;
import com.su.msg.LoginMsg.Login_;
import com.su.msg.TableMsg._GamePlayerResult;

import io.netty.channel.ChannelHandlerContext;

public interface PlayerActor {
	
	/**
	 * 处理消息
	 * */
	public void process(ChannelHandlerContext ctx, MessageLite messageLite);
	
	/**
	 * 退出
	 * */
	public void logout(PlayerContext playerContext);
	
	/**
	 * 登陆
	 * */
	public void login(PlayerContext playerContext, Login_.Builder builder);
	
	/**
	 * 检测刷新
	 * */
	public void checkRefresh(PlayerContext playerContext);
	
	/**
	 * 处理牌局结果
	 * */
	public _GamePlayerResult doTableResult(TableResult tableResult);
	
	/**
	 * 处理比赛结束
	 * */
	public void doContestClose(int ranking);
	
	/**
	 * 获取 Plyaer
	 * @return 
	 * */
	public Player getPlayerById(long id);
}
