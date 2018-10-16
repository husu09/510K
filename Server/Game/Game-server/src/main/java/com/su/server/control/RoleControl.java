package com.su.server.control;

import java.util.Map;
import java.util.Map.Entry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.constant.BagConst;
import com.su.common.obj.Grid;
import com.su.common.obj.Role;
import com.su.common.po.PlayerDetail;
import com.su.config.BagCo;
import com.su.config.RoleCo;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.excel.mapper.BagConf;
import com.su.excel.mapper.RoleConf;
import com.su.msg.RoleMsg.GetRole;
import com.su.msg.RoleMsg.GetRoleTo;
import com.su.msg.RoleMsg.RoleNo;
import com.su.msg.RoleMsg.UpRole;
import com.su.server.service.BagService;
import com.su.server.service.PlayerService;
import com.su.server.service.RoleService;

@Controller
public class RoleControl {
	
	@Autowired
	private PlayerService playerService;
	@Autowired
	private RoleService roleService;
	@Autowired
	private BagService bagService;
	@Autowired
	private BagConf bagConf;
	@Autowired
	private RoleConf roleConf;
	
	private Logger logger = LoggerFactory.getLogger(RoleControl.class);
	
	/**
	 * 获取角色
	 * */
	@Action
	public void getRole(PlayerContext ctx, GetRole req) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		GetRoleTo.Builder getRole_ = GetRoleTo.newBuilder();
		for (Role role : playerDetail.getRoleMap().values()) {
			getRole_.addRole(roleService.serializeRole(role));
		}
		ctx.write(getRole_);
	}
	
	/**
	 * 升级角色
	 * */
	@Action
	public void upRole(PlayerContext ctx, UpRole req) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		Role role = playerDetail.getRoleMap().get(req.getRid());
		if (role == null || !role.isEff()) {
			ctx.sendError(5001);
			return;
		}
		Map<Integer, Integer> costMap = req.getCostMap();
		// 要添加的经验
		int addExp = 0;
		for (Entry<Integer, Integer> en : costMap.entrySet()) {
			Grid grid = bagService.getGrid(ctx, en.getKey());
			if (grid == null) {
				logger.error("格子不存在");
				continue;
			}
			BagCo bagCo = bagConf.get(grid.getSysId());
			if (bagCo == null) {
				logger.error("bagCo is null");
				continue;
			}
			if (bagCo.getType() != BagConst.TYPE_EXP) {
				logger.error("道具类型不对");
				continue;
			}
			
			// 扣除背包道具
			if (!bagService.eddItemByIndex(ctx, en.getKey(), en.getValue(), 2005)) {
				logger.error("道具不足");
				continue;
			}
			addExp += bagCo.getUseNum() * en.getValue();
		}
		
		if (addExp == 0) 
			return;
		role.setCurrExp(role.getCurrExp() + addExp);
		RoleCo roleCo = roleConf.get(role.getRid());
		// 处理升级
		while (role.getCurrExp() >= roleCo.getUpExp()) {
			role.setCurrExp(role.getCurrExp() - roleCo.getUpExp());
			role.setRid(roleCo.getUpId());
			roleCo = roleConf.get(role.getRid());
			if (roleCo == null) {
				logger.error("roleCo is null");
				return;
			}
		}
		// 通知
		RoleNo.Builder roleNo_ = RoleNo.newBuilder();
		roleNo_.setRole(roleService.serializeRole(role));
		ctx.write(roleNo_);
	}
	
}
