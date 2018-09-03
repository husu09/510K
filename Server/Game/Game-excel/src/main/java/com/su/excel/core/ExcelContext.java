package com.su.excel.core;

import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;

@Component
public class ExcelContext {

	private Logger logger = LoggerFactory.getLogger(ExcelProcessor.class);

	/**
	 * 配置映射类
	 */
	private Map<String, ExcelMapper<?>> mapperMap = new HashMap<>();


	public Map<String, ExcelMapper<?>> getMapperMap() {
		return mapperMap;
	}

	/**
	 * 所有配置加载完成时调用
	 */
	public void doBeforeFinishLoadAll() {
		for (ExcelMapper<?> mapper : mapperMap.values()) {
			mapper.beforeFinishLoadAll();
		}
	}
	
	/**
	 * 所有配置加载完成时调用
	 */
	public void doAfterFinishLoadAll() {
		for (ExcelMapper<?> mapper : mapperMap.values()) {
			mapper.afterFinishLoadAll();
		}
	}

	/**
	 * 保存预处理数据
	 */
	public void savePreData(String preDataDir) {
		File dir = new File(preDataDir);
		if (!dir.exists())
			dir.mkdirs();
		for (ExcelMapper<?> mapper : mapperMap.values()) {
			try {
				PrintWriter out = new PrintWriter(new FileWriter(preDataDir + mapper.getName()));
				for (Object o : mapper.all()) {
					String jsonString = JSON.toJSONString(o);
					out.println(jsonString);
				}
				out.flush();
				out.close();
				logger.info("{}：{}", mapper.getName(), mapper.all().size());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	}

}
