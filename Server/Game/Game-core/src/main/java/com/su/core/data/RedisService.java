package com.su.core.data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;

/**
 * redis 缓存管理对象
 */
@Service
public class RedisService {
	@Autowired
	private RedisClient client;

	public void saveOrUpdate(Object o) {
		if (!CacheUtil.isPersistent(o)) {
			return;
		}
		client.hset(CacheUtil.getParentKey(o), CacheUtil.getKey(o), JSON.toJSONString(o));
	}

	public void saveOrUpdate(Collection<Object> os) {
		for (Object o : os) {
			saveOrUpdate(o);
		}

	}

	public void saveOrUpdate(Object[] os) {
		for (Object o : os) {
			saveOrUpdate(o);
		}

	}

	public void delete(Class<?> c) {
		client.del(CacheUtil.getParentKey(c));
	}

	public void delete(Object o) {
		client.hdel(CacheUtil.getParentKey(o), CacheUtil.getKey(o));
	}

	public void delete(Collection<Object> os) {
		for (Object o : os) {
			delete(o);
		}
	}

	public void delete(Object[] os) {
		for (Object o : os) {
			delete(o);
		}
	}

	public <T> T get(Class<T> c, long id) {
		String value = client.hget(CacheUtil.getParentKey(c), CacheUtil.getKey(c, id));
		return JSON.parseObject(value, c);
	}

	public <T> List<T> list(Class<T> c) {
		List<String> list = client.hvals(CacheUtil.getParentKey(c));
		List<T> ts = new ArrayList<>(list.size());
		for (String s : list) {
			T t = JSON.parseObject(s, c);
			ts.add(t);
		}
		return ts;
	}

	public <T> List<T> list(Class<T> c, int first, int max) {
		List<T> resultList = null;
		int i = 0;
		for (T t : list(c)) {
			if (i >= first) {
				if (resultList == null)
					resultList = new ArrayList<>(max);
				resultList.add(t);
			}
			if (i + 1 == max)
				break;
			i++;
		}
		return resultList;
	}

}
