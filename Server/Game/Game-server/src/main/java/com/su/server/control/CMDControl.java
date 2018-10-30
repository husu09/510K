package com.su.server.control;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.obj.Item;
import com.su.common.po.Mail;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.msg.CommonMsg.CMD;
import com.su.msg.RoleMsg.UpRole;
import com.su.server.service.MailService;
import com.su.server.service.ResourceService;

@Controller
public class CMDControl {

	@Autowired
	private ResourceService resourceService;
	@Autowired
	private RoleControl roleControl;
	@Autowired
	private MailService mailService;
	
	
	private Map<String, Method> methodMap = new HashMap<>();
	
	@PostConstruct
	private void init() {
		// 扫描所有 GM 方法
		for (Method method : getClass().getDeclaredMethods()) {
			if (method.getAnnotation(Action.class) == null) {
				methodMap.put(method.getName(), method);
			}
		}
	}
	
	@Action
	public void cmd(PlayerContext playerContext, CMD cmd) {
		if (cmd.getParametersCount() < 1) {
			playerContext.sendError(1002);
			return;
		}
		String methodName = cmd.getParameters(0);
		Method method = methodMap.get(methodName);
		if (method == null) {
			playerContext.sendError(1002);
			return;
		}
		if (method.getParameterCount() != cmd.getParametersCount()) {
			playerContext.sendError(1002);
			return;
		}
		Object[] parameters = new Object[method.getParameterCount()];
		parameters[0] = playerContext;
		for (int i = 1; i < method.getParameterTypes().length; i ++) {
			if (method.getParameterTypes()[i].isAssignableFrom(int.class)) {
				parameters[i] = Integer.parseInt(cmd.getParameters(i));
			} else {
				parameters[i] = cmd.getParameters(i);
			}
		}
		try {
			method.invoke(this, parameters);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 添加物品
	 * */
	private void addItem(PlayerContext playerContext, int type, int sysId, int count) {
		Item item = new Item();
		item.setType(type);
		item.setSysId(sysId);
		item.setCount(count);
		resourceService.add(playerContext, item, 1000);
	}
	
	/**
	 * 扣除物品
	 * */
	private void eddItem(PlayerContext playerContext, int type, int sysId, int count) {
		Item item = new Item();
		item.setType(type);
		item.setSysId(sysId);
		item.setCount(count);
		resourceService.edd(playerContext, item, 2000);
	}
	
	/**
	 * 升级角色
	 * */
	private void upRole(PlayerContext ctx,int rid, int index, int count) {
		UpRole.Builder upRole = UpRole.newBuilder();
		upRole.setRid(rid);
		upRole.putCost(index, count);
		roleControl.upRole(ctx, upRole.build());
	}
	
	/**
	 * 发送邮件
	 * */
	private void sendMail(PlayerContext ctx, int mailId) {
		Mail mail = new Mail();
		mail.setMailId(mailId);
		Item item = new Item();
		item.setType(3);
		item.setSysId(1001);
		item.setCount(1);
		mail.getRewards().add(item);
		mailService.addMail(ctx, mail);
	}
}
