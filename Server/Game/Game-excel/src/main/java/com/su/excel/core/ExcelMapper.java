package com.su.excel.core;

import java.util.List;

/**
 * 配置文件映射接口
 * */
public interface ExcelMapper<T> {
	
	/**
	 * 返回文件名
	 * */
	public String getName();
	/**
	 * 行数据映射成对象
	 * */
	public T map(RowData rowData);
	/**
	 * 添加配置
	 * */
	public void beforeAdd(Object obj);
	
	/**
	 * （预处理）加载完当前配置表时调用
	 * */
	public void beforeFinishLoad();
	
	/**
	 * （预处理）加载完所有配置时调用
	 * */
	public void beforeFinishLoadAll();
	
	/**
	 * 通过 id 获取配置
	 * */
	public T get(int id);
	
	/**
	 * 获取所有配置
	 * */
	public List<T> all();
	
	/**
	 * （使用时）添加配置数据
	 * */
	public void afterAdd(String value);
	/**
	 * （使用时）加载完当前配置表时调用
	 * */
	public void afterFinishLoad();
	
	/**
	 * （使用时）加载完所有配置时调用
	 * */
	public void afterFinishLoadAll();

}
