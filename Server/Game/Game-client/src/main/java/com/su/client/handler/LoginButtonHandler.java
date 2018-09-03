package com.su.client.handler;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JTextField;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.su.client.core.ClientContext;
import com.su.client.core.NettyClient;
import com.su.msg.LoginMsg.Login;

/**
 * 登录
 */
@Component
public class LoginButtonHandler implements ActionListener {

	@Autowired
	private ClientContext clientContext;
	@Autowired
	private NettyClient nettyClient;

	@Override
	public void actionPerformed(ActionEvent e) {

		JTextField hostTF = clientContext.getHostTF();
		String[] arr = hostTF.getText().split(":");
		if (arr.length < 2) {
			clientContext.showMessage("服务器地址错误！\n");
			return;
		}
		JTextField userNameTF = clientContext.getUserNameTF();
		if (userNameTF.getText().trim().equals("")) {
			clientContext.showMessage("用户名不能为空！\n");
			return;
		}
		// 保存数据
		clientContext.saveData(hostTF.getText(), userNameTF.getText());

		if (clientContext.getCtx() != null) {
			clientContext.getCtx().close();
		}
		nettyClient.start(arr[0], Integer.parseInt(arr[1]));
		clientContext.write(Login.newBuilder().setAccount(userNameTF.getText()).setName(userNameTF.getText()).build());

	}

}
