package com.su.server.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.constant.BagConst;
import com.su.common.obj.Grid;
import com.su.common.po.PlayerDetail;
import com.su.config.BagCo;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.excel.mapper.BagConf;
import com.su.msg.BagMsg.GetBag;
import com.su.msg.BagMsg.GetBagTo;
import com.su.msg.BagMsg.UseItem;
import com.su.server.service.BagService;
import com.su.server.service.PlayerService;
import com.su.server.service.ResourceService;
import com.su.server.service.RoleService;

@Controller
public class BagControl {
	
	@Autowired
	private BagConf bagConf;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private BagService bagService;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private RoleService roleService;
	
	@Action
	public void getBag(PlayerContext ctx, GetBag req) {
		GetBagTo.Builder result = GetBagTo.newBuilder();
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		for (int i = 0; i < playerDetail.getGridList().size(); i ++) {
			result.addGrid(bagService.serializeGrid(i, playerDetail.getGridList().get(i)));
		}
		ctx.write(result);
	}
	
	@Action
	public void useItem(PlayerContext ctx, UseItem req) {
		Grid grid = bagService.getGrid(ctx, req.getIndex());
		if (grid == null) {
			ctx.sendError(1002);
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
		if (grid.getType() != BagConst.TYPE_GIFT
				&& grid.getType() != BagConst.TYPE_ROLE) {
			ctx.sendError(4002);
			return;
		}
		// 扣除道具
		if (!bagService.eddItemByIndex(ctx, req.getIndex(), req.getUseCount(), 2004)) {
			ctx.sendError(4001);
			return;
		}
		// 使用效果
		if (grid.getType() == BagConst.TYPE_GIFT) {
			resourceService.add(ctx, bagCo.getUseItem(), 1003);
		} else if (grid.getType() == BagConst.TYPE_ROLE) {
			roleService.addRole(ctx, bagCo);
		}
	}
}
