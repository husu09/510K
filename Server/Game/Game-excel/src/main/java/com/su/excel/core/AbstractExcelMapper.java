package com.su.excel.core;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSON;

/**
 * 配置文件映射基类
 */
public abstract class AbstractExcelMapper<T> implements ExcelMapper<T> {

	@Autowired
	private ExcelContext excelContext;

	/**
	 * 存储解析后的数据
	 */
	private Map<Integer, T> storageMap = new HashMap<>();
	private List<T> storageList = new ArrayList<>();

	@PostConstruct
	protected void init() {
		excelContext.getMapperMap().put(getName(), this);
	}
	

	@Override
	public void beforeFinishLoad() {
		
	}


	@Override
	public void beforeFinishLoadAll() {
		
	}


	@Override
	public void afterFinishLoad() {
		
	}


	@Override
	public void afterFinishLoadAll() {
		
	}


	@Override
	public T get(int id) {
		return storageMap.get(id);
	}

	@Override
	public List<T> all() {
		return storageList;
	}

	private Class<T> getTypeClass() {
		Class<T> entityClass = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass())
				.getActualTypeArguments()[0];
		return entityClass;
	}

	@Override
	public void afterAdd(String value) {
		T t = JSON.parseObject(value, getTypeClass());
		try {
			Field field = t.getClass().getDeclaredField("id");
			field.setAccessible(true);
			int id = field.getInt(t);
			storageMap.put(id, t);
			storageList.add(t);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void beforeAdd(Object obj) {
		try {
			Field field = obj.getClass().getDeclaredField("id");
			field.setAccessible(true);
			int id = field.getInt(obj);
			storageMap.put(id, (T) obj);
			storageList.add((T) obj);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
