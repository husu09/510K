package com.su.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.obj.Item;
import com.su.common.po.Mail;
import com.su.common.util.TimeUtil;
import com.su.core.context.GameContext;
import com.su.core.context.PlayerContext;
import com.su.core.data.DataService;
import com.su.msg.MailMsg.MailMo;
import com.su.msg.MailMsg.MailNo;

@Service
public class MailService {
	@Autowired
	private DataService dataService;
	@Autowired
	private GameContext gameContext;
	
	/**
	 * 添加邮件
	 * */
	public void addMail(PlayerContext ctx, Mail mail) {
		mail.setPlayerId(ctx.getPlayerId());
		mail.setSendName("系统邮件");
		mail.setSendTime(TimeUtil.getCurrTime());
		mail.updateRewardData();
		mail.updateParamData();
		dataService.save(mail);
		ctx.getMailMap().put(mail.getId(), mail);
		// 通知
		MailNo.Builder no = MailNo.newBuilder();
		no.setMail(serialize(mail));
		ctx.write(no);
	}
	
	/**
	 * 添加邮件（离线）
	 * */
	public void addMail(long playerId, Mail mail) {
		mail.setPlayerId(playerId);
		mail.setSendName("系统邮件");
		mail.setSendTime(TimeUtil.getCurrTime());
		dataService.save(mail);
		PlayerContext ctx = gameContext.getPlayerContextMap().get(playerId);
		if (ctx != null) {
			ctx.getMailMap().put(mail.getId(), mail);
			// 通知
			MailNo.Builder no = MailNo.newBuilder();
			no.setMail(serialize(mail));
			ctx.write(no);
		}
	}
	
	/**
	 * 删除邮件
	 * */
	public void delMail(PlayerContext ctx, Mail mail) {
		dataService.delete(mail);
		ctx.getMailMap().remove(mail.getId());
	}
	
	public MailMo serialize(Mail mail) {
		MailMo.Builder _Mail = MailMo.newBuilder();
		_Mail.setId(mail.getId());
		_Mail.setMailId(mail.getMailId());
		_Mail.setSendName(mail.getSendName());
		_Mail.setSendTime(mail.getSendTime());
		_Mail.setIsReceive(mail.getIsReceive());
		for (Item item : mail.getRewards()) {
			_Mail.addReward(item.serialize());
		}
		for (String param : mail.getParams()) {
			_Mail.addParams(param);
		}
		return _Mail.build();
	}
	
}
