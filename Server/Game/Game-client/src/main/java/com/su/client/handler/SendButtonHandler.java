package com.su.client.handler;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

import javax.swing.JTextField;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.su.client.core.ClientConst;
import com.su.client.core.ClientContext;
import com.su.client.core.ClientUtil;

/**
 * 发送消息
 */
@Component
public class SendButtonHandler implements ActionListener {
	
	@Autowired
	private ClientContext clientContext;
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if (clientContext.getCtx() == null) {
			clientContext.showMessage("请先登录！\n");
			return;
		}
		// 组装协议信息
		MessageLite messageLite = clientContext.getSelectMessageLite();
		List<JTextField> textFields = clientContext.getTextFields();
		try {
			Object builder = messageLite.getClass().getMethod("newBuilder").invoke(null);
			for (JTextField tf : textFields) {
				int type = clientContext.getProperty(messageLite.getClass().getSimpleName(),
						tf.getName());
				if (type == ClientConst.INT_TYPE) {
					int value = 0;
					if (!tf.getText().trim().equals("")) {
						value = Integer.parseInt(tf.getText());
					}
					builder.getClass().getMethod("set" + ClientUtil.upperFirstCharacter(tf.getName()), int.class)
							.invoke(builder, value);
				} else if (type == ClientConst.INTS_TYPE) {
					String[] arr = tf.getText().split(",");
					for (String s : arr) {
						int value = 0;
						if (!s.trim().equals("")) {
							value = Integer.parseInt(s);
						}
						builder.getClass().getMethod("add" + ClientUtil.upperFirstCharacter(tf.getName()), int.class)
								.invoke(builder, value);
					}
				} else if (type == ClientConst.STRING_TYPE) {
					builder.getClass().getMethod("set" + ClientUtil.upperFirstCharacter(tf.getName()), String.class)
							.invoke(builder, tf.getText());
				} else if (type == ClientConst.STRINGS_TYPE) {
					String[] arr = tf.getText().split(",");
					for (String s : arr) {
						builder.getClass().getMethod("add" + ClientUtil.upperFirstCharacter(tf.getName()), String.class)
						.invoke(builder, s);
					}
				}
			}
			MessageLite ml = (MessageLite) builder.getClass().getMethod("build").invoke(builder);
			// 发送消息
			clientContext.write(ml);
			clientContext.showMessage(ml);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		
	}

}
