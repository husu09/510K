package com.su.common.util;

import com.su.common.obj.Item;

public class ParseUtil {

	public static int getInt(String value) {
		if (StringUtil.isNone(value))
			return 0;
		return Integer.parseInt(value);
	}

	public static boolean getBoolean(String value) {
		if (ParseUtil.getInt(value) > 0)
			return true;
		return false;
	}

	public static Item getItem(String value) {
		if (StringUtil.isNone(value))
			return null;
		String[] splits = value.split("_");
		Item goods = new Item();
		goods.setType(Integer.parseInt(splits[0]));
		goods.setSysId(Integer.parseInt(splits[1]));
		goods.setCount(Integer.parseInt(splits[2]));
		return goods;
	}

	public static int[] getIntArr(String value) {
		if (StringUtil.isNone(value))
			return null;
		String[] splits = value.split("_");
		int[] arr = null;
		for (int i = 0; i < splits.length; i++) {
			if (arr == null)
				arr = new int[splits.length];
			arr[i] = Integer.parseInt(splits[i]);
		}
		return arr;
	}
}
