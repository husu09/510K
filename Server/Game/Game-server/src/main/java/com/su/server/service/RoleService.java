package com.su.server.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.constant.BagConst;
import com.su.common.obj.Role;
import com.su.common.po.PlayerDetail;
import com.su.common.util.TimeUtil;
import com.su.config.BagCo;
import com.su.config.RoleCo;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;
import com.su.excel.mapper.BagConf;
import com.su.excel.mapper.RoleConf;
import com.su.msg.RoleMsg.RoleMo;
import com.su.msg.RoleMsg.RoleNo;

@Service
public class RoleService {
	
	@Autowired
	private RoleConf roleConf;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private BagConf bagConf;
	@Autowired
	private DataService dataService;
	
	private Logger logger = LoggerFactory.getLogger(RoleService.class);
	
	/**
	 * 添加角色
	 * */
	public boolean addRole(PlayerContext ctx, BagCo bagCo) {
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
			role.setRid(roleCo.getId());
			role.setCurrExp(0);
			playerDetail.getRoleMap().put(role.getRid(), role);
		}
		role.setEffType(bagCo.getEffTyep());
		// 设置有效值
		if (bagCo.getEffTyep() == BagConst.EFF_TYPE_COUNT) 
			role.setEffValue(bagCo.getEffValue());
		else if (bagCo.getEffTyep() == BagConst.EFF_TYPE_TIME)
			role.setEffValue(TimeUtil.getCurrTime() + TimeUtil.ONE_DAY * bagCo.getEffValue());
		playerDetail.updateRoleData();
		dataService.save(playerDetail);
		// 通知
		RoleNo.Builder roleNo_ = RoleNo.newBuilder();
		roleNo_.setRole(serializeRole(role));
		ctx.write(roleNo_);
		return true;
	}
	
	/**
	 * 删除角色
	 * */
	public void delRole(PlayerContext ctx, int rid) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		playerDetail.getRoleMap().remove(rid);
		playerDetail.updateRoleData();
		dataService.save(playerDetail);
	}
	
	public RoleMo serializeRole(Role role) {
		RoleMo.Builder _Role = RoleMo.newBuilder();
		_Role.setRid(role.getRid());
		_Role.setExp(role.getCurrExp());
		_Role.setEffType(role.getEffType());
		_Role.setEffValue(role.getEffValue());
		return _Role.build();
	}
	
}
