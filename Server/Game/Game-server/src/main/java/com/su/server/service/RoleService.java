package com.su.server.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.obj.Role;
import com.su.common.po.PlayerDetail;
import com.su.config.BagCo;
import com.su.config.RoleCo;
import com.su.core.context.PlayerContext;
import com.su.excel.mapper.BagConf;
import com.su.excel.mapper.RoleConf;

@Service
public class RoleService {
	
	@Autowired
	private RoleConf roleConf;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private BagConf bagConf;
	
	private Logger logger = LoggerFactory.getLogger(RoleService.class);
	
	/**
	 * 添加角色
	 * */
	public boolean addRole(PlayerContext ctx,int sysId) {
		BagCo bagCo = bagConf.get(sysId);
		if (bagCo == null) {
			logger.error("bagCo is null");
			return false;
		}
		RoleCo roleCo = roleConf.get(bagCo.getUseNum());
		if (roleCo == null) {
			logger.error("roleCo is null");
			return false;
		}
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		Role role = playerDetail.getRoleMap().get(roleCo.getId());
		// 角色已存在
		if (role != null && role.isEff()) {
			logger.error("角色已存在", roleCo.getId());
			return false;
		} else {
			role = new Role();
			role.setCid(roleCo.getId());
			role.setCurrExp(0);
		}
		role.setEffType(bagCo.getEffTyep());
		role.setEffValue(bagCo.getEffValue());
		return true;
	}
}
