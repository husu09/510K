package com.su.common.util;

import com.su.common.obj.Goods;

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

	public static Goods getGoods(String value) {
		if (StringUtil.isNone(value))
			return null;
		String[] splits = value.split("_");
		Goods goods = new Goods();
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
