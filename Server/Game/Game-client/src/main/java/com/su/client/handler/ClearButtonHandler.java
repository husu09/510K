package com.su.client.handler;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.su.client.core.ClientContext;

/**
 * 清空文本框
 * */
@Component
public class ClearButtonHandler implements ActionListener {
	
	@Autowired
	private ClientContext clientContext;
	
	@Override
	public void actionPerformed(ActionEvent e) {
		clientContext.getTextArea().setText("");
	}

}
