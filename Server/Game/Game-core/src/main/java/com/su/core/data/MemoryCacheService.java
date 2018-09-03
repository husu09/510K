package com.su.core.data;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 内存缓存管理对象
 * */
@Service
public class MemoryCacheService {
	@Autowired
	private MemoryCache cache;

	public void saveOrUpdate(Object o) {
		if (!CacheUtil.isPersistent(o)) {
			return;
		}
		cache.add(o);
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
		cache.remove(c);

	}

	public void delete(Object o) {
		cache.remove(o);
	}

	public void delete(Collection<Object> os) {
		for (Object o : os)
			cache.remove(o);
	}

	public void delete(Object[] os) {
		for (Object o : os)
			cache.remove(o);
	}

	public <T> T get(Class<T> c, long id) {
		return cache.get(c, id);
	}

	public <T> List<T> list(Class<T> c) {
		return cache.list(c);
	}

	public <T> List<T> list(Class<T> c, int first, int max) {
		return cache.list(c, first, max);
	}

}
