package com.su.common.util;

import java.util.Random;
import java.util.regex.Pattern;

public class CommonUtil {
	/**
	 * 判断是否为整数
	 */
	private static final Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");

	public static boolean isInteger(String s) {
		return pattern.matcher(s).matches();
	}

	
	private static final Random random = new Random();
	/**
	 * 按范围随机，不包含max
	 */
	public static int range(int min, int max) {
		return random.nextInt(max - min) + min;
	}

}
