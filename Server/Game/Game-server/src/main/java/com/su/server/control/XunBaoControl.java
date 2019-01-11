package com.su.server.control;

import java.util.List;
import java.util.Map.Entry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.constant.XunBaoConst;
import com.su.common.po.PlayerDetail;
import com.su.common.util.RandomUtil;
import com.su.common.util.RandomUtil.IRandom;
import com.su.common.util.TimeUtil;
import com.su.config.XunBaoCostCo;
import com.su.config.XunBaoRewardCo;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;
import com.su.excel.mapper.XunBaoCostConf;
import com.su.excel.mapper.XunBaoRewardConf;
import com.su.msg.XunBaoMsg.GetXunBao;
import com.su.msg.XunBaoMsg.GetXunBaoTo;
import com.su.msg.XunBaoMsg.XunBao;
import com.su.msg.XunBaoMsg.XunBaoMo;
import com.su.msg.XunBaoMsg.XunBaoTo;
import com.su.server.service.PlayerService;
import com.su.server.service.ResourceService;

@Controller
public class XunBaoControl {
	
	@Autowired
	private PlayerService playerService;
	@Autowired
	private DataService dataService;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private XunBaoRewardConf rewardConf;
	@Autowired
	private XunBaoCostConf costConf;
	
	private Logger logger = LoggerFactory.getLogger(XunBaoControl.class);
	
	
	
	/**
	 * 寻宝信息
	 * */
	@Action
	public void getXunBao(PlayerContext ctx, GetXunBao req) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		GetXunBaoTo.Builder getXunBao_ = GetXunBaoTo.newBuilder();
		XunBaoMo.Builder _XunBao = XunBaoMo.newBuilder();
		for (Entry<Integer, Long> e : playerDetail.getXunBaoMap().entrySet()) {
			_XunBao.setType(e.getKey());
			_XunBao.setNextTime(e.getValue());
			getXunBao_.addXunBao(_XunBao);
		}
		ctx.write(getXunBao_);
	}
	
	/**
	 * 寻宝
	 * */
	@Action
	public void xunBao(PlayerContext ctx, XunBao req) {
		// 配置
		XunBaoCostCo costCo = costConf.get(req.getType());
		if (costCo == null) {
			ctx.sendError(1004);
			return;
		}
	
		//List<XunBaoRewardCo> rewardList = rewardConf.getByType(req.getType());
		List<XunBaoRewardCo> rewardList = null;
		if (rewardList == null) {
			ctx.sendError(1004);
			return;
		}
		
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		Long nextTime = playerDetail.getXunBaoMap().get(req.getType());
		nextTime = nextTime == null ? 0 : nextTime;
		// 是否免费
		boolean isFree = false;
		long currTime = TimeUtil.getCurrTime();
		if (currTime >= nextTime) {
			isFree = true;
			if (req.getType() == XunBaoConst.TYPE_LOW) {
				nextTime = currTime + 1800000;
			} else if (req.getType() == XunBaoConst.TYPE_MID) {
				nextTime = TimeUtil.getNextZero();
			} else {
				nextTime = TimeUtil.getWeekZero(7);
			}
			playerDetail.getXunBaoMap().put(req.getType(), nextTime);
			playerDetail.updateXunBaoData();
			dataService.update(playerDetail);
		}
		// 扣除消耗
		if (!isFree) {
			if (!resourceService.edd(ctx, costCo.getCost(), 2006)) {
				return;
			}
		}
		// 随机奖品
		XunBaoTo.Builder xunBao_ = XunBaoTo.newBuilder();
		for (int i = 0; i < costCo.getRewardCount(); i ++) {
			//XunBaoRewardCo reward = (XunBaoRewardCo)RandomUtil.random(rewardList);
			XunBaoRewardCo reward = null;
			if (reward == null) {
				logger.error("reward is null");
				return;
			}
			resourceService.add(ctx, reward.getItem(), 1004);
			xunBao_.addReward(reward.getItem().serialize());
		}
		ctx.write(xunBao_);
		
	}
}
