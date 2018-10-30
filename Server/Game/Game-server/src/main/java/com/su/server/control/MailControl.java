package com.su.server.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.obj.Item;
import com.su.common.po.Mail;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;
import com.su.msg.MailMsg.DelMail;
import com.su.msg.MailMsg.DelMailTo;
import com.su.msg.MailMsg.GetMail;
import com.su.msg.MailMsg.GetMailReward;
import com.su.msg.MailMsg.GetMailTo;
import com.su.msg.MailMsg.MailMo;
import com.su.server.service.MailService;
import com.su.server.service.ResourceService;

@Controller
public class MailControl {
	
	@Autowired
	private MailService mailService;
	@Autowired
	private DataService dataService;
	@Autowired
	private ResourceService resourceService;
	
	/**
	 * 获取邮件信息
	 * */
	@Action
	public void getMail(PlayerContext ctx, GetMail req) {
		GetMailTo.Builder resp = GetMailTo.newBuilder();
		for (Mail mail : ctx.getMailMap().values()) {
			resp.addMail(mailService.serialize(mail));
		}
		ctx.write(resp);
	}
	
	/**
	 * 删除邮件
	 * */
	@Action
	public void delMail(PlayerContext ctx, DelMail req) {
		DelMailTo.Builder resp = DelMailTo.newBuilder();
		for (long id : req.getIdList()) {
			Mail mail = ctx.getMailMap().remove(id);
			dataService.delete(mail);
			resp.addId(id);
		}
		ctx.write(resp);
		
	}
	
	/**
	 * 领取附件
	 * */
	@Action
	public void getMailReward(PlayerContext ctx, GetMailReward req) {
		Mail mail = ctx.getMailMap().get(req.getId());
		if (mail == null) {
			ctx.sendError(1002);
			return;
		}
		if (mail.getIsReceive() != 0) {
			ctx.sendError(6001);
			return;
		}
		if (mail.getRewards().size() < 1) {
			ctx.sendError(6001);
			return;
		}
		// 修改领取状态
		mail.setIsReceive(1);
		dataService.update(mail);
		// 发放奖励
		for (Item item : mail.getRewards()) {
			resourceService.add(ctx, item, 1005);
		}
		
	}
}
