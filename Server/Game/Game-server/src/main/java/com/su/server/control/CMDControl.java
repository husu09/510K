package com.su.server.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.obj.Goods;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.msg.CommonMsg.CMD;
import com.su.server.service.BagService;
import com.su.server.service.ResourceService;

@Controller
public class CMDControl {

	@Autowired
	private ResourceService resourceService;

	@Action
	public void cmd(PlayerContext playerContext, CMD cmd) {
		// 增加物品
		if (cmd.getCmd() == 10000) {
			Goods item = new Goods();
			item.setType(cmd.getType());
			item.setSysId(cmd.getSysId());
			item.setCount(cmd.getCount());
			resourceService.add(playerContext, item, 1000);
		// 扣除物品
		} else if (cmd.getCmd() == 10001) {
			Goods item = new Goods();
			item.setType(cmd.getType());
			item.setSysId(cmd.getSysId());
			item.setCount(cmd.getCount());
			resourceService.edd(playerContext, item, 2000);
		}
	}
}
