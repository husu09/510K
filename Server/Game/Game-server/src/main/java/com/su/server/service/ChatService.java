package com.su.server.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.su.core.context.PlayerContext;
import com.su.msg.Chat.ChatMo;

@Service
public class ChatService {
	
	private List<ChatMo> chats = Collections.synchronizedList(new  ArrayList<>(20));
	
	/**
	 * 过滤屏蔽字
	 * */
	public String filterMask(String str) {
		
		String path = getClass().getClassLoader().getResource("maskWord.txt").getPath();
		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new FileReader(new File(path)));
			String line = reader.readLine();
			String[] split = line.split(",");
			for (String s : split) {
				str.replace(s, "*");
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return str;
	}
	
	/**
	 * 是否包含屏蔽字
	 * */
	public boolean containMask(String str) {
		String newStr = filterMask(str);
		return !str.equals(newStr);
	}

	public List<ChatMo> getChats() {
		return chats;
	}
	
}
