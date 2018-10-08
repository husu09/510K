package com.su.common.util;

public class StringUtil {
	
	
	/**
	 * 字符为 null 或 长度为 0
	 * @param str
	 * @return
	 */
	public static boolean isNone(String str) {
		if (str == null || str.trim().length() == 0)
			return true;
		return false;
	}
}
