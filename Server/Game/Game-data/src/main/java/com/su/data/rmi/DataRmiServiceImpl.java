package com.su.data.rmi;

import java.util.Collection;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.rmi.DataRmiService;
import com.su.data.dao.BaseDao;

@Service
public class DataRmiServiceImpl implements DataRmiService {
	
	@Autowired
	private BaseDao dao;
	
	@Override
	public <T> long save(T t) {
		return dao.save(t);
	}

	@Override
	public <T> long[] save(Collection<T> ts) {
		return dao.save(ts);
	}

	@Override
	public <T> long[] save(T[] ts) {
		return dao.save(ts);
	}

	@Override
	public <T> void update(T t) {
		dao.update(t);
	}

	@Override
	public <T> void update(Collection<T> ts) {
		dao.update(ts);
	}

	@Override
	public <T> void update(T[] ts) {
		dao.update(ts);
	}

	@Override
	public int update(String sql) {
		return dao.update(sql);
	}

	@Override
	public <T> void delete(T t) {
		dao.delete(t);
	}

	@Override
	public <T> void delete(Collection<T> ts) {
		dao.delete(ts);
	}

	@Override
	public <T> void delete(T[] ts) {
		dao.delete(ts);
	}

	@Override
	public int delete(String sql) {
		return dao.delete(sql);
	}

	@Override
	public <T> T get(Class<T> c, long id) {
		return dao.get(c, id);
	}

	@Override
	public <T> T get(DetachedCriteria detachedCriteria) {
		return dao.get(detachedCriteria);
	}

	@Override
	public <T> List<T> list(Class<T> c) {
		return dao.list(c);
	}

	@Override
	public <T> List<T> list(DetachedCriteria detachedCriteria) {
		return dao.list(detachedCriteria);
	}

	@Override
	public <T> List<T> list(Class<T> c, int first, int max) {
		return dao.list(c, first, max);
	}

	@Override
	public <T> List<T> list(DetachedCriteria detachedCriteria, int first, int max) {
		return dao.list(detachedCriteria, first, max);
	}

	@Override
	public long get(Class<?> c, Projection projection) {
		return dao.get(c, projection);
	}

	
}
