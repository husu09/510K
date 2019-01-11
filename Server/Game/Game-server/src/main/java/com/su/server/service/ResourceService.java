package com.su.server.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.constant.SysAttr;
import com.su.common.obj.Item;
import com.su.common.po.Player;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;

@Service
public class ResourceService {
	
	private Logger logger = LoggerFactory.getLogger(ResourceService.class);

	@Autowired
	private BagService bagService;
	@Autowired
	private LogService logService;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private DataService dataService;

	/**
	 * 添加资源
	 */
	public void add(PlayerContext playerContext, Item item, int reason) {
		add(playerContext, item.getType(), item.getSysId(), item.getCount(), reason);
	}

	public void add(PlayerContext playerContext, int type, int sysId, int count, int reason) {
		if (type == SysAttr.PEANUT)
			addPeanut(playerContext, count, reason);
		else if (type == SysAttr.DIAMOND)
			addDiamond(playerContext, count, reason);
		else if (type == SysAttr.ITEM)
			bagService.addItem(playerContext, sysId, count, reason);
		else {
			logger.error("未知类型{}", type);
		}
	}

	/**
	 * 扣除资源
	 */
	public boolean edd(PlayerContext playerContext, Item item, int reason) {
		return edd(playerContext, item.getType(), item.getSysId(), item.getCount(), reason);
	}

	public boolean edd(PlayerContext playerContext, int type, int sysId, int count, int reason) {
		if (type == SysAttr.PEANUT)
			return eddPeanut(playerContext, count, reason);
		else if (type == SysAttr.DIAMOND)
			return eddDiamond(playerContext, count, reason);
		else if (type == SysAttr.ITEM)
			return bagService.eddItem(playerContext, sysId, count, reason);
		return false;
	}

	/**
	 * 添加花生
	 */
	private void addPeanut(PlayerContext playerContext, int addCount, int reason) {
		if (addCount <= 0)
			return;
		Player player = playerService.getPlayer(playerContext.getPlayerId());
		player.setBean(player.getBean() + addCount);
		dataService.update(player);
		playerContext.getBuilder().setBean(player.getBean());
		playerContext.setNotice(true);
		logService.addPeanutLog(player.getId(), reason, addCount, player.getBean());
	}

	/**
	 * 扣除花生
	 */
	private boolean eddPeanut(PlayerContext playerContext, int eddCount, int reason) {
		if (eddCount <= 0)
			return true;
		Player player = playerService.getPlayer(playerContext.getPlayerId());
		if (player.getBean() < eddCount)
			return false;
		player.setBean(player.getBean() - eddCount);
		dataService.update(player);
		playerContext.getBuilder().setBean(player.getBean());
		playerContext.setNotice(true);
		logService.addPeanutLog(player.getId(), reason, eddCount, player.getBean());
		return true;
	}
	
	/**
	 * 添加钻石
	 */
	private void addDiamond(PlayerContext playerContext, int addCount, int reason) {
		if (addCount <= 0)
			return;
		Player player = playerService.getPlayer(playerContext.getPlayerId());
		player.setDiamond(player.getDiamond() + addCount);
		dataService.update(player);
		playerContext.getBuilder().setDiamond(player.getDiamond());
		playerContext.setNotice(true);
		logService.addDiamondLog(player.getId(), reason, addCount, player.getBean());
	}
	
	/**
	 * 扣除钻石
	 */
	private boolean eddDiamond(PlayerContext playerContext, int eddCount, int reason) {
		if (eddCount <= 0)
			return true;
		Player player = playerService.getPlayer(playerContext.getPlayerId());
		if (player.getDiamond() < eddCount)
			return false;
		player.setDiamond(player.getDiamond() - eddCount);
		dataService.update(player);
		playerContext.getBuilder().setDiamond(player.getDiamond());
		playerContext.setNotice(true);
		logService.addDiamondLog(player.getId(), reason, eddCount, player.getBean());
		return true;
	}
}
