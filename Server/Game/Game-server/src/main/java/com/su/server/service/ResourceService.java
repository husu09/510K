package com.su.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.su.common.constant.SysAttr;
import com.su.common.obj.Goods;
import com.su.common.po.Player;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;

@Service
public class ResourceService {

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
	public void add(PlayerContext playerContext, Goods item, int reason) {
		add(playerContext, item.getType(), item.getSysId(), item.getCount(), reason);
	}

	public void add(PlayerContext playerContext, int type, int sysId, int count, int reason) {
		if (type == SysAttr.PEANUT)
			addPeanut(playerContext, count, reason);
		else if (type == SysAttr.ITEM)
			bagService.addItem(playerContext, type, sysId, count, reason);
	}

	/**
	 * 扣除资源
	 */
	public boolean edd(PlayerContext playerContext, Goods item, int reason) {
		return edd(playerContext, item.getType(), item.getSysId(), item.getCount(), reason);
	}

	public boolean edd(PlayerContext playerContext, int type, int sysId, int count, int reason) {
		if (type == SysAttr.PEANUT)
			return eddPeanut(playerContext, count, reason);
		else if (type == SysAttr.ITEM)
			return bagService.eddItem(playerContext, type, sysId, count, reason);
		return false;
	}

	/**
	 * 添加花生
	 */
	private void addPeanut(PlayerContext playerContext, int addCount, int reason) {
		if (addCount <= 0)
			return;
		Player player = playerService.getPlayerById(playerContext.getPlayerId());
		player.setPeanut(player.getPeanut() + addCount);
		dataService.update(player);
		playerContext.getBuilder().setPeanut(player.getPeanut());
		playerContext.setNotice(true);
		logService.addPeanutLog(player.getId(), reason, addCount, player.getPeanut());
	}

	/**
	 * 扣除花生
	 */
	private boolean eddPeanut(PlayerContext playerContext, int eddCount, int reason) {
		if (eddCount <= 0)
			return true;
		Player player = playerService.getPlayerById(playerContext.getPlayerId());
		if (player.getPeanut() < eddCount)
			return false;
		player.setPeanut(player.getPeanut() - eddCount);
		dataService.update(player);
		playerContext.getBuilder().setPeanut(player.getPeanut());
		playerContext.setNotice(true);
		logService.addPeanutLog(player.getId(), reason, eddCount, player.getPeanut());
		return true;
	}
}
