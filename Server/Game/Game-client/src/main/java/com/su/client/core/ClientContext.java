package com.su.client.core;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import org.springframework.stereotype.Component;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.MessageLite;
import com.google.protobuf.MessageLiteOrBuilder;
import com.google.protobuf.MessageOrBuilder;
import com.google.protobuf.util.JsonFormat;

import io.netty.channel.ChannelHandlerContext;

@Component
public class ClientContext {

	/**
	 * 文本域
	 */
	private JTextArea textArea;
	/**
	 * 用户名文本框
	 */
	private JTextField userNameTF;
	/**
	 * 地址文本框
	 */
	private JTextField hostTF;
	/**
	 * 参数面板
	 */
	private JPanel panel;
	/**
	 * 参数文本框
	 */
	private List<JTextField> textFields = Collections.synchronizedList(new ArrayList<>());
	/**
	 * 当前选中的协议
	 */
	private volatile MessageLite selectMessageLite;
	/**
	 * <协议名称,<属性名，类型>>
	 */
	private Map<String, Map<String, Integer>> map = new HashMap<>();
	/**
	 * 连接对象
	 */
	private ChannelHandlerContext ctx;
	/**
	 * 协议面板
	 */
	private JPanel msgPanel;

	private String dataPath = System.getProperty("user.dir") + "/" + ClientConst.SAVE_FILE;

	public MessageLite getSelectMessageLite() {
		return selectMessageLite;
	}

	public void setSelectMessageLite(MessageLite selectMessageLite) {
		this.selectMessageLite = selectMessageLite;
	}

	public void addProperty(String messageName, String propertyName, int propertyType) {
		if (map.get(messageName) == null) {
			map.put(messageName, new HashMap<>(5));
		}
		map.get(messageName).put(propertyName, propertyType);
	}

	public int getProperty(String messageName, String propertyName) {
		return map.get(messageName).get(propertyName);
	}

	public JPanel getPanel() {
		return panel;
	}

	public void setPanel(JPanel panel) {
		this.panel = panel;
	}

	public JTextArea getTextArea() {
		return textArea;
	}

	public void setTextArea(JTextArea textArea) {
		this.textArea = textArea;
	}

	public List<JTextField> getTextFields() {
		return textFields;
	}

	public void setTextFields(List<JTextField> textFields) {
		this.textFields = textFields;
	}

	public JTextField getUserNameTF() {
		return userNameTF;
	}

	public void setUserNameTF(JTextField userNameTF) {
		this.userNameTF = userNameTF;
	}

	public JTextField getHostTF() {
		return hostTF;
	}

	public void setHostTF(JTextField hostTF) {
		this.hostTF = hostTF;
	}

	public void setCtx(ChannelHandlerContext ctx) {
		this.ctx = ctx;
	}

	public ChannelHandlerContext getCtx() {
		return ctx;
	}

	public JPanel getMsgPanel() {
		return msgPanel;
	}

	public void setMsgPanel(JPanel msgPanel) {
		this.msgPanel = msgPanel;
	}

	/**
	 * 发送数据
	 */
	public void write(MessageLiteOrBuilder msg) {
		ctx.writeAndFlush(msg);
	}

	/**
	 * 保存client数据
	 */
	public void saveData(String host, String name) {
		try {
			Properties prop = new Properties();
			prop.setProperty("host", host);
			prop.setProperty("name", name);
			FileOutputStream out = new FileOutputStream(dataPath);
			prop.store(out, "client data");
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 获取client数据
	 */
	public Map<String, String> getData() {
		Map<String, String> map = new HashMap<>();
		try {
			Properties prop = new Properties();
			File file = new File(dataPath);
			if (!file.exists()) {
				file.createNewFile();
			}
			InputStream in = new FileInputStream(file);
			prop.load(in);
			map.put("host", prop.getProperty("host"));
			map.put("name", prop.getProperty("name"));
			in.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return map;
	}

	public void showMessage(String string) {
		textArea.append(string);
	}

	public void showMessage(MessageLite messageLite) {
		try {
			String jsonStr = JsonFormat.printer().includingDefaultValueFields().print((MessageOrBuilder) messageLite);
			showMessage(messageLite.getClass().getSimpleName() + jsonStr + "\n");
		} catch (InvalidProtocolBufferException e) {
			e.printStackTrace();
		}
	}

}
