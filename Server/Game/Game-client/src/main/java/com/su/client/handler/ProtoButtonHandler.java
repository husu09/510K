package com.su.client.handler;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.reflect.Field;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.su.client.core.ClientConst;
import com.su.client.core.ClientContext;
import com.su.client.proto.ProtoContext;

/**
 * 生成 proto 参数输入框
 */
@Component
public class ProtoButtonHandler implements ActionListener {

	@Autowired
	private ClientContext clientContext;
	@Autowired
	private ProtoContext protoContext;

	@Override
	public void actionPerformed(ActionEvent e) {
		clientContext.getTextFields().clear();
		JPanel p = clientContext.getPanel();
		p.setVisible(false);
		p.removeAll();
		JButton but = (JButton) e.getSource();
		MessageLite messageLite = protoContext.getMessageLiteMap().get(but.getText());
		clientContext.setSelectMessageLite(messageLite);
		Class<?> c = messageLite.getClass();
		Field[] fields = c.getDeclaredFields();
		boolean floag = false;
		for (Field f : fields) {
			if (f.getName().endsWith("_") && !f.getName().equals("bitField0_")) {
				floag = true;
				JPanel r1p = new JPanel();
				String propertyName = f.getName().substring(0, f.getName().length() - 1);
				JLabel r1l = new JLabel(propertyName);
				JTextField r1t = new JTextField(20);
				r1t.setName(propertyName);
				clientContext.getTextFields().add(r1t);
				int propertyType = 0;
				if (f.getType().getName().equals("int")) {
					propertyType = ClientConst.INT_TYPE;
				} else if (f.getType().getName().equals("java.lang.Object")) {
					propertyType = ClientConst.STRING_TYPE;
				} else if (f.getType().getName().equals("java.util.List")) {
					propertyType = ClientConst.INTS_TYPE;
					r1t.setText(",,,");
				} else if (f.getType().getName().equals("com.google.protobuf.LazyStringList")) {
					propertyType = ClientConst.STRINGS_TYPE;
					r1t.setText(",,,");
				} else {
					System.out.println("未知的字段类型：" + propertyName);
					continue;
				}
				clientContext.addProperty(but.getText(), propertyName, propertyType);
				r1p.add(r1l);
				r1p.add(r1t);
				JLabel empty = new JLabel("     ");
				r1p.add(empty);
				p.add(r1p);
			}
		}
		if (!floag) {
			JPanel r1p = new JPanel();
			JLabel r1l = new JLabel(but.getText() + " is not parameter");
			r1p.add(r1l);
			p.add(r1p);
		}
		p.setVisible(true);
	}

}
