package com.su.common.util;

public class StringUtil {
	public static boolean isNone(String str) {
		if (str == null || str.trim().length() == 0)
			return true;
		return false;
	}
}
