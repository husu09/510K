package com.su.common.rmi;

import java.util.Collection;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projection;

/**
 * 数据库操作远程调用接口
 * */
public interface DataRmiService {
	
	public <T> long save(T t);

	public <T> long[] save(Collection<T> ts);

	public <T> long[] save(T[] ts);

	public <T> void update(T t);

	public <T> void update(Collection<T> ts);

	public <T> void update(T[] ts);

	public int update(String sql);

	public <T> void delete(T t);

	public <T> void delete(Collection<T> ts);

	public <T> void delete(T[] ts);

	public int delete(String sql);

	public <T> T get(Class<T> c, long id);

	public <T> T get(DetachedCriteria detachedCriteria);

	public <T> List<T> list(Class<T> c);

	public <T> List<T> list(DetachedCriteria detachedCriteria);

	public <T> List<T> list(Class<T> c, int first, int max);

	public <T> List<T> list(DetachedCriteria detachedCriteria, int first, int max);

	public long get(Class<?> c, Projection projection);
}
