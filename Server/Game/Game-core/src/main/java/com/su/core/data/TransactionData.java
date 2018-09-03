package com.su.core.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.su.common.mq.DataOperator;

public class TransactionData {
	
	/**
	 * 延时操作，成功时提交清除，失败时清除
	 */
	private Map<DataOperator, Object> lazyDataOperator = new HashMap<>();
	/**
	 * 缓存数据，成功时清除，失败时先清除缓存再清除该集合
	 */
	private List<Object> cacheData = new ArrayList<>();

	public Map<DataOperator, Object> getLazyDataOperator() {
		return lazyDataOperator;
	}

	public List<Object> getCacheData() {
		return cacheData;
	}

}
