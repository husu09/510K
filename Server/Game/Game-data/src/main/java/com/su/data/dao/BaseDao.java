package com.su.data.dao;

import java.util.Collection;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projection;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class BaseDao {

	@Autowired
	private SessionFactory sessionFactory;

	public <T> long save(T t) {
		Session session = sessionFactory.getCurrentSession();
		return (long) session.save(t);
	}

	public <T> long[] save(Collection<T> ts) {
		Session session = sessionFactory.getCurrentSession();
		long[] ids = new long[ts.size()];
		int i = 0;
		for (T t : ts) {
			int id = (int) session.save(t);
			ids[i] = id;
			i++;
		}
		return ids;
	}

	public <T> long[] save(T[] ts) {
		Session session = sessionFactory.getCurrentSession();
		long[] ids = new long[ts.length];
		int i = 0;
		for (T t : ts) {
			int id = (int) session.save(t);
			ids[i] = id;
			i++;
		}
		return ids;
	}

	public <T> void update(T t) {
		Session session = sessionFactory.getCurrentSession();
		session.update(t);
	}

	public <T> void update(Collection<T> ts) {
		Session session = sessionFactory.getCurrentSession();
		for (T t : ts) {
			session.update(t);
		}
	}

	public <T> void update(T[] ts) {
		Session session = sessionFactory.getCurrentSession();
		for (T t : ts) {
			session.update(t);
		}
	}

	public int update(String sql) {
		Session session = sessionFactory.getCurrentSession();
		NativeQuery query = session.createSQLQuery(sql);
		return query.executeUpdate();
	}

	public <T> void delete(T t) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(t);
	}

	public <T> void delete(Collection<T> ts) {
		Session session = sessionFactory.getCurrentSession();
		for (T t : ts) {
			session.delete(t);
		}
	}

	public <T> void delete(T[] ts) {
		Session session = sessionFactory.getCurrentSession();
		for (T t : ts) {
			session.delete(t);
		}
	}

	public int delete(String sql) {
		Session session = sessionFactory.getCurrentSession();
		NativeQuery query = session.createSQLQuery(sql);
		return query.executeUpdate();
	}

	public <T> T get(Class<T> c, long id) {
		Session session = sessionFactory.getCurrentSession();
		return session.get(c, id);
	}

	public <T> T get(DetachedCriteria detachedCriteria) {
		Session session = sessionFactory.getCurrentSession();
		Criteria criteria = detachedCriteria.getExecutableCriteria(session);
		return (T) criteria.uniqueResult();
	}

	public <T> List<T> list(Class<T> c) {
		Session session = sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(c);
		return criteria.list();
	}

	public <T> List<T> list(DetachedCriteria detachedCriteria) {
		Session session = sessionFactory.getCurrentSession();
		Criteria criteria = detachedCriteria.getExecutableCriteria(session);
		return criteria.list();
	}

	public <T> List<T> list(Class<T> c, int first, int max) {
		Session session = sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(c);
		criteria.setFirstResult(first);
		criteria.setMaxResults(max);
		return criteria.list();
	}

	public <T> List<T> list(DetachedCriteria detachedCriteria, int first, int max) {
		Session session = sessionFactory.getCurrentSession();
		Criteria criteria = detachedCriteria.getExecutableCriteria(session);
		criteria.setFirstResult(first);
		criteria.setMaxResults(max);
		return criteria.list();
	}
	
	public long get(Class<?> c, Projection projection) {
		Session session = sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(c);
		criteria.setProjection(projection);
		Object result = criteria.uniqueResult();
		if (result == null) return 0;
		return (Long)result;
	}
	

}
