package com.su.core.data;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;

/**
 * 内存缓存存储结构
 * */
@Component
public class MemoryCache {
	
	/**
	 * 内存中的缓存结构
	 * */
	private Map<Class<?>, Map<String, Object>> classValueMap = new ConcurrentHashMap<>();
	
	public void add(Object o) {
		Map<String, Object> map = classValueMap.get(o.getClass());
		if (map == null) {
			map = new ConcurrentHashMap<>();
			Map<String, Object> reValue = classValueMap.putIfAbsent(o.getClass(), map);
			if (reValue != null)
				map = reValue;
		}
		map.put(CacheUtil.getKey(o), o);
	}

	public void remove(Object o) {
		Map<String, Object> map = classValueMap.get(o.getClass());
		if (map == null)
			return;
		map.remove(CacheUtil.getKey(o));
	}
	
	public void remove(Class<?> c) {
		classValueMap.remove(c);
	}

	public <T> T get(Class<T> c, long id) {
		Map<String, Object> map = classValueMap.get(c);
		if (map == null)
			return null;
		return (T) map.get(CacheUtil.getKey(c, id));
	}

	public <T> List<T> list(Class<T> c) {
		Map<String, Object> map = classValueMap.get(c);
		if (map == null)
			return null;
		return  (List<T>) map.values();
	}

	public <T> List<T> list(Class<T> c, int first, int max) {
		Map<String, Object> map = classValueMap.get(c);
		if (map == null)
			return null;
		List<Object> resultList = null;
		int i = 0;
		for (Object o : map.values()) {
			if (i >= first) {
				if (resultList == null)
					resultList = new ArrayList<>(max);
				resultList.add(o);
			}
			if (i+1 == max)
				break;
			i++;
		}
		return (List<T>) resultList;
	}
}
