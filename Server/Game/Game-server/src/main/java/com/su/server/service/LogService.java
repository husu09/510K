package com.su.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.po.log.ItemLog;
import com.su.common.po.log.PeanutLog;
import com.su.core.data.DataService;

@Service
public class LogService {
	
	@Autowired
	private DataService dataService;

	/**
	 * @param reason	来源
	 * @param sysId		道具id		
	 * @param useCount	使用数量
	 * @param leftCount	剩余数量（-1 表示没统计）
	 */
	public void addItemLog(long playerId, int reason,int sysId, int useCount, int leftCount) {
		ItemLog temp = new ItemLog();
		temp.setId(playerId);
		temp.setSysId(sysId);
		temp.setReason(reason);
		temp.setUseCount(useCount);
		temp.setLeftCount(leftCount);
		dataService.save(temp);
	}
	
	/**
	 * @param reason	来源
	 * @param useCount	使用数量
	 * @param leftCount	剩余数量（-1 表示没统计）
	 */
	public void addPeanutLog(long playerId, int reason, int useCount, int leftCount) {
		PeanutLog temp = new PeanutLog();
		temp.setId(playerId);
		temp.setReason(reason);
		temp.setUseCount(useCount);
		temp.setLeftCount(leftCount);
		dataService.save(temp);
	}
}
