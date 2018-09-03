package com.su.excel.core;

import java.util.HashMap;
import java.util.Map;

import com.su.common.obj.Goods;
import com.su.common.util.ParseUtil;

/**
 * 行数据
 */
public class RowData {

	private Map<String, String> data = new HashMap<>();

	public void put(String columnName, String value) {
		data.put(columnName, value);
	}

	public int getInt(String key) {
		return ParseUtil.getInt(data.get(key));
	}

	public String getString(String key) {
		return data.get(key);
	}

	public boolean getBoolean(String key) {
		return ParseUtil.getBoolean(data.get(key));
	}

	public Goods getGoods(String key) {
		return ParseUtil.getGoods(data.get(key));
	}
	
	public int[] getIntArr(String key) {
		return ParseUtil.getIntArr(data.get(key));
	}
	
}
