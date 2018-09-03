package com.su.client.core;

public class ClientUtil {
	/**
	 * 首字母大写
	 * */
	public static String upperFirstCharacter(String str) {
		 return str.substring(0, 1).toUpperCase() + str.substring(1);  
	}
}
