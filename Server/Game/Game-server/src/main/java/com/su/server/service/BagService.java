package com.su.server.service;

import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.constant.BagConst;
import com.su.common.obj.Grid;
import com.su.common.po.PlayerDetail;
import com.su.common.util.TimeUtil;
import com.su.config.BagCo;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;
import com.su.core.event.GameEventAdapter;
import com.su.excel.mapper.BagConf;
import com.su.msg.BagMsg.AddItemNo;
import com.su.msg.BagMsg.DeleteItemNo;
import com.su.msg.BagMsg.GridMo;
import com.su.msg.BagMsg.UpdateItemNo;
import com.su.msg.LoginMsg.LoginTo;

@Service
public class BagService extends GameEventAdapter {

	private Logger logger = LoggerFactory.getLogger(BagService.class);

	@Autowired
	private BagConf bagConf;
	@Autowired
	private LogService logService;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private DataService dataService;

	/**
	 * 添加物品
	 */
	public boolean addItem(PlayerContext playerContext, int sysId, int count, int reason) {
		int oriCount = count;
		PlayerDetail playerDetail = playerService.getPlayerDetail(playerContext.getPlayerId());
		// 排序规则：类型小的 < 品质大 < id小
		BagCo bagCo = bagConf.get(sysId);
		if (bagCo == null) {
			logger.error("找不到对应的配置 {}", sysId);
			return false;
		}
		if (count <= 0) {
			logger.info("item 个数为 {}", count);
			return true;
		}
		UpdateItemNo.Builder updateItem_ = UpdateItemNo.newBuilder();
		AddItemNo.Builder addItem_ = AddItemNo.newBuilder();
		List<Grid> bagGrid = playerDetail.getGridList();
		int i = 0;
		for (Iterator<Grid> it = bagGrid.iterator(); it.hasNext(); i++) {

			// 全部已添加
			if (count == 0)
				break;
			Grid grid = it.next();
			// id 相同叠加物品
			if (grid.getSysId() == sysId) {
				if (grid.getCount() >= bagCo.getLimit()) {
					continue;
				}
				int addCount = count;
				if (count + grid.getCount() > bagCo.getLimit()) {
					addCount = bagCo.getLimit() - grid.getCount();
					count -= addCount;
				} else {
					count = 0;
				}
				grid.setCount(grid.getCount() + addCount);

				updateItem_.addGrid(serializeGrid(i, grid));
				continue;
			} 
			if (grid.getType() == bagCo.getType()) {
				BagCo currBagCo = bagConf.get(grid.getSysId());
				if (bagCo.getQuality() > currBagCo.getQuality()) {
					createGrid(playerContext, bagGrid, i, sysId, count, bagCo, addItem_);
					break;
				} else if (currBagCo.getQuality() == bagCo.getQuality() && bagCo.getId() < currBagCo.getId()) {
					createGrid(playerContext, bagGrid, i, sysId, count, bagCo, addItem_);
					break;
				}
			} else if (grid.getType() > bagCo.getType()) {
					createGrid(playerContext, bagGrid, i, sysId, count, bagCo, addItem_);
					break;
			}
		}
		// 找不到可以叠加或插入的位置，直接添加到末尾
		if (count > 0) {
			createGrid(playerContext, bagGrid, bagGrid.size(), sysId, count, bagCo, addItem_);
		}
		playerDetail.updateBagData();
		dataService.update(playerDetail);
		// 通知
		if (updateItem_.getGridCount() > 0)
			playerContext.write(updateItem_);
		if (addItem_.getGridCount() > 0)
			playerContext.write(addItem_);
		// 流水
		logService.addItemLog(playerContext.getPlayerId(), reason, sysId, oriCount, -1);
		return true;
	}

	/**
	 * 扣除物品
	 */
	public boolean eddItem(PlayerContext playerContext, int sysId, int count, int reason) {
		BagCo bagCo = bagConf.get(sysId);
		if (bagCo == null) {
			logger.error("找不到对应的配置 {}", sysId);
			return false;
		}
		int oriCount = count;
		PlayerDetail playerDetail = playerService.getPlayerDetail(playerContext.getPlayerId());
		int haveCount = 0;
		List<Grid> bagGrid = playerDetail.getGridList();
		for (int i = 0; i < bagGrid.size(); i++) {
			Grid grid = bagGrid.get(i);
			if (grid.getType() > bagCo.getType())
				break;

			if (sysId == grid.getSysId())
				haveCount += grid.getCount();
		}
		if (haveCount < count) {
			return false;
		}
		UpdateItemNo.Builder updateItem_ = null;
		DeleteItemNo.Builder deleteItem_ = null;
		// 从后往前，数量少的先扣
		for (int i = bagGrid.size() - 1; i >= 0; i--) {
			Grid grid = bagGrid.get(i);
			if (sysId == grid.getSysId()) {
				if (grid.getCount() > count) {
					grid.setCount(grid.getCount() - count);
					// 通知
					if (updateItem_ == null)
						updateItem_ = UpdateItemNo.newBuilder();
					updateItem_.addGrid(serializeGrid(i, grid));
					break;
				} else {
					count -= grid.getCount();
					if (count == 0) {
						// 通知
						if (deleteItem_ == null)
							deleteItem_ = DeleteItemNo.newBuilder();
						deleteItem_.addIndex(i);
						break;
					}
				}
			}
		}
		// 删除格子
		for (int index : deleteItem_.getIndexList()) {
			bagGrid.remove(index);
		}
		playerDetail.updateBagData();
		dataService.update(playerDetail);
		if (updateItem_ != null)
			playerContext.write(updateItem_);
		if (deleteItem_ != null)
			playerContext.write(deleteItem_);
		// 流水
		logService.addItemLog(playerContext.getPlayerId(), reason, sysId, oriCount, haveCount - count);
		return true;
	}

	/**
	 * 创建新格子
	 */
	private void createGrid(PlayerContext playerContext, List<Grid> bagGrid, int index, int sysId, int count,
			BagCo bagCo, AddItemNo.Builder addItem_) {
		// 全部已添加
		if (count == 0)
			return;
		Grid grid = new Grid();
		grid.setType(bagCo.getType());
		grid.setSysId(sysId);
		int addCount = count;
		if (count > bagCo.getLimit()) {
			addCount = bagCo.getLimit();
			count -= bagCo.getLimit();
		} else {
			count = 0;
		}
		grid.setCount(addCount);
		grid.setEffType(bagCo.getEffTyep());
		if (bagCo.getEffTyep() == BagConst.EFF_TYPE_TIME)
			grid.setEffValue(TimeUtil.getCurrTime() + bagCo.getEffValue() * TimeUtil.ONE_DAY);
		else if (bagCo.getEffTyep() == BagConst.EFF_TYPE_COUNT)
			grid.setEffValue(bagCo.getEffValue());
		bagGrid.add(index, grid);
		addItem_.addGrid(serializeGrid(index, grid));

		createGrid(playerContext, bagGrid, index + 1, sysId, count, bagCo, addItem_);
	}
	
	/**
	 * 扣除指定格子的物品
	 * */
	public boolean eddItemByIndex(PlayerContext playerContext, int index, int count, int reason) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(playerContext.getPlayerId());
		// 没有这个格子
		if (index >= playerDetail.getGridList().size()) {
			return false;
		}
		// 数量不足
		Grid grid = playerDetail.getGridList().get(index);
		if (grid.getCount() < count) {
			return false;
		}
		// 扣除数量
		grid.setCount(grid.getCount() - count);
		// 通知
		if (grid.getCount() <= 0) {
			playerDetail.getGridList().remove(index);
			DeleteItemNo.Builder deleteItem_ = DeleteItemNo.newBuilder();
			deleteItem_.addIndex(index);
			playerContext.write(deleteItem_);
		} else {
			UpdateItemNo.Builder updateItem_ = UpdateItemNo.newBuilder();
			updateItem_.addGrid(serializeGrid(index, grid));
			playerContext.write(updateItem_);
		}
		playerDetail.updateBagData();
		dataService.update(playerDetail);
		// 流水
		logService.addItemLog(playerContext.getPlayerId(), reason, grid.getSysId(), count, grid.getCount());
		return true;		
	}
	
	/**
	 * 获取指定格子
	 * */
	public Grid getGrid(PlayerContext playerContext, int index) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(playerContext.getPlayerId());
		if (index >= playerDetail.getGridList().size()) {
			return null;
		}
		return playerDetail.getGridList().get(index);
	}
	
	
	public GridMo serializeGrid(int index, Grid grid) {
		GridMo.Builder builder = GridMo.newBuilder();
		builder.setIndex(index);
		builder.setType(grid.getType());
		builder.setSysId(grid.getSysId());
		builder.setCount(grid.getCount());
		builder.setEffType(grid.getEffType());
		builder.setEffValue(grid.getEffValue());
		return builder.build();
	}

	@Override
	public void login(PlayerContext playerContext, LoginTo.Builder builder) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(playerContext.getPlayerId());
		List<Grid> gridList = playerDetail.getGridList();
		for (int i = 0; i < gridList.size(); i++) {
			builder.addGrid(serializeGrid(i, gridList.get(i)));
		}
	}

}
