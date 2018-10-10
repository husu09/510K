package com.su.server.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.constant.BagConst;
import com.su.common.obj.Grid;
import com.su.config.BagCo;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.excel.mapper.BagConf;
import com.su.msg.BagMsg.UseItem;
import com.su.server.service.BagService;
import com.su.server.service.ResourceService;

@Controller
public class BagControl {
	
	@Autowired
	private BagConf bagConf;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private BagService bagService;
	
	@Action
	public void useItem(PlayerContext ctx, UseItem req) {
		Grid grid = bagService.getGrid(ctx, req.getIndex());
		if (grid == null) {
			ctx.sendError(1002);
			return;
		}
		// 请求物品不一致
		if (grid.getSysId() != req.getSysId() || grid.getCount() != req.getCount()) {
			ctx.sendError(4003);
			return;
		}
		if (grid.getCount() < req.getUseCount()) {
			ctx.sendError(4001);
			return;
		}
		BagCo bagCo = bagConf.get(grid.getSysId());
		if (bagCo == null) {
			ctx.sendError(1004);
			return;
		}
		// 道具是否能使用
		if (grid.getType() != BagConst.TYPE_6) {
			ctx.sendError(4002);
			return;
		}
		// 扣除道具
		if (!bagService.eddItem(ctx, req.getIndex(), req.getUseCount(), 1000)) {
			ctx.sendError(4001);
			return;
		}
		// 使用效果
		if (grid.getType() == BagConst.TYPE_6) {
			resourceService.add(ctx, bagCo.getUseItem(), 2000);
		}
	}
}
