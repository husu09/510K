package com.su.client.handler;

import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JPanel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.MessageLite;
import com.google.protobuf.MessageOrBuilder;
import com.google.protobuf.util.JsonFormat;
import com.su.client.core.ClientContext;
import com.su.client.proto.ProtoContext;

@Component
public class ComboBoxHandler implements ActionListener {
	@Autowired
	private ClientContext clientContext;
	@Autowired
	private ProtoContext protoContext;
	@Autowired
	private ProtoButtonHandler protoButtonHandler;
	
	@Override
	public void actionPerformed(ActionEvent e) {
		JComboBox<String> jcb = (JComboBox<String>) e.getSource();
		String superName = jcb.getSelectedItem().toString();
		List<MessageLite> messageLiteList = protoContext.getMessageListeSortMap().get(superName);
		if (messageLiteList != null) {
			JPanel msgPanel = clientContext.getMsgPanel();
			msgPanel.setVisible(false);
			msgPanel.removeAll();
			for (MessageLite messageLite : messageLiteList) {
				String msgName = messageLite.getClass().getSimpleName();
				if (msgName.startsWith("_") || msgName.endsWith("_") || msgName.equals("Login"))
					continue;
				JButton tB = new JButton(msgName);
				tB.setPreferredSize(new Dimension(180, 25));
				tB.addActionListener(protoButtonHandler);
				msgPanel.add(tB);
			}
			msgPanel.setVisible(true);
		}
		
	}
	
}
