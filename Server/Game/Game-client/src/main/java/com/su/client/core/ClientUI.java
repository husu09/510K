package com.su.client.core;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.ScrollPaneConstants;
import javax.swing.UIManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import com.su.client.handler.ClearButtonHandler;
import com.su.client.handler.ComboBoxHandler;
import com.su.client.handler.LoginButtonHandler;
import com.su.client.handler.SendButtonHandler;
import com.su.client.proto.ProtoContext;
import com.su.common.util.SpringUtil;

@Component
public class ClientUI {
	@Autowired
	private ProtoContext protoContext;
	@Autowired
	private NettyClient client;
	@Autowired
	private ClientContext clientContext;
	@Autowired
	private ClearButtonHandler clearButtonHandler;
	@Autowired
	private LoginButtonHandler loginButtonHandler;
	@Autowired
	private SendButtonHandler sendButtonHandler;
	@Autowired
	private ComboBoxHandler comboBoxHandler;

	public void show() throws Exception {
		// 窗口
		JFrame frame = new JFrame();
		frame.setSize(1000, 700);
		frame.setLocationByPlatform(true);
		UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
		frame.setLayout(new BorderLayout());
		frame.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent windowEvent) {
				AnnotationConfigApplicationContext context = (AnnotationConfigApplicationContext) SpringUtil
						.getContext();
				client.stop();
				context.close();
				System.exit(0);
			}
		});
		// =========================
		// 左面板
		// =========================
		JPanel leftP = new JPanel();
		leftP.setLayout(new GridLayout(1, 2));
		leftP.setPreferredSize(new Dimension(460, 0));

		// 左左
		JPanel leftLeft = new JPanel();
		leftLeft.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));

		// 第一行
		JPanel r1p = new JPanel();
		JLabel ipL = new JLabel("地址");
		JTextField ipT = new JTextField(20);
		ipT.setText(clientContext.getData().get("host"));
		r1p.add(ipL);
		r1p.add(ipT);
		leftLeft.add(r1p);
		clientContext.setHostTF(ipT);

		// 第二行
		JPanel r2p = new JPanel();
		JLabel nameL = new JLabel("用户");
		JTextField nameT = new JTextField(20);
		nameT.setText(clientContext.getData().get("name"));
		JButton loginB = new JButton("登录");
		loginB.addActionListener(loginButtonHandler);
		r2p.add(nameL);
		r2p.add(nameT);
		r2p.add(loginB);
		leftLeft.add(r2p);
		clientContext.setUserNameTF(nameT);

		// 第三行

		JPanel r3p = new JPanel();
		JLabel passwordL = new JLabel("密码");
		JTextField passwordT = new JTextField(20);
		JButton sendB = new JButton("发送");
		sendB.addActionListener(sendButtonHandler);
		r3p.add(passwordL);
		r3p.add(passwordT);
		r3p.add(sendB);
		leftLeft.add(r3p);

		// 第四行
		JPanel r4p = new JPanel();
		JComboBox<String> jcb = new JComboBox<String>();
		for (String superName : protoContext.getMessageListeSortMap().keySet()) {
			jcb.addItem(superName);
		}
		jcb.addActionListener(comboBoxHandler);
		r4p.add(jcb);
		leftLeft.add(r4p);

		// 左下
		JPanel leftBelow = new JPanel();
		leftBelow.setLayout(new FlowLayout(FlowLayout.RIGHT, 0, 0));
		leftBelow.setPreferredSize(new Dimension(460 / 2, 550));
		leftLeft.add(leftBelow);
		leftP.add(leftLeft);
		clientContext.setPanel(leftBelow);

		// 左右
		JPanel leftRight = new JPanel();
		leftRight.setLayout(new BorderLayout());
		JPanel lrp = new JPanel();
		lrp.setLayout(new FlowLayout(FlowLayout.CENTER));
		// 一定要给 FlowLayout 设置高度，否则滚动条显示不出来
		lrp.setPreferredSize(new Dimension(460 / 2, 1080));
		leftRight.add(lrp);
		JScrollPane jsp = new JScrollPane(lrp);
		jsp.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
		leftRight.add(jsp);
		leftP.add(leftRight);
		clientContext.setMsgPanel(lrp);

		// =========================
		// 右面板
		// =========================
		JPanel rightP = new JPanel();
		rightP.setLayout(new BorderLayout());

		// 右上
		JPanel rightTop = new JPanel();
		rightTop.setLayout(new BorderLayout());
		JTextArea textA = new JTextArea(20, 20);
		JScrollPane scroll = new JScrollPane(textA);
		rightTop.add(scroll);
		rightP.add("Center", rightTop);
		clientContext.setTextArea(textA);

		// 右下
		JPanel rightBelow = new JPanel();
		JButton clearB = new JButton("清空");
		clearB.addActionListener(clearButtonHandler);
		rightBelow.setLayout(new FlowLayout());
		rightBelow.add(clearB);
		rightP.add("South", rightBelow);

		frame.getContentPane().add("West", leftP);
		frame.getContentPane().add("Center", rightP);
		frame.setVisible(true);

	}
}
