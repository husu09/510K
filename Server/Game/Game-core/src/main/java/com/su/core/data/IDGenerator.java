package com.su.core.data;

import java.io.File;
import java.lang.reflect.Field;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import javax.persistence.Id;

import org.hibernate.criterion.Projections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.su.common.rmi.DataRmiService;

/**
 * id 生成器
 */
@Component
public class IDGenerator {

	private final static Logger logger = LoggerFactory.getLogger(IDGenerator.class);

	@Autowired
	private DataRmiService dataRmiService;
	@Value("${entity.packName}")
	private String packName;

	private Map<String, AtomicLong> idMap = new ConcurrentHashMap<>();

	public long next(Object o) {
		long id = getId(o);
		if (id != 0) {
			return id;
		}
		String parentKey = CacheUtil.getParentKey(o);
		AtomicLong atomicLong = idMap.get(parentKey);
		id = atomicLong.incrementAndGet();
		setId(o, id);
		return id;
	}

	private long getMaxId(Class<?> classes) {
		return dataRmiService.get(classes, Projections.max("id"));
	}

	/**
	 * 设置 id
	 */
	public void setId(Object o, Object id) {
		Field[] fields = o.getClass().getDeclaredFields();
		boolean flag = false;
		for (Field f : fields) {
			if (f.isAnnotationPresent(Id.class)) {
				try {
					flag = true;
					f.setAccessible(true);
					f.set(o, id);
					break;
				} catch (Exception e) {
					e.printStackTrace();
					logger.error("设置对象id失败{} {}", o, id);
				}
			}
		}
		if (!flag)
			logger.info("对象没有id属性{}", o);
	}

	/**
	 * 获取 id
	 */
	public long getId(Object o) {
		long id = 0;
		if (o == null)
			return id;
		Field[] fields = o.getClass().getDeclaredFields();
		for (Field f : fields) {
			if (f.isAnnotationPresent(Id.class)) {
				try {
					f.setAccessible(true);
					id = (long) f.get(o);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		return id;
	}

	public void init() {
		scan(packName);
		logger.info("id生成器初始化成功 {}", packName);
	}

	public void scan(String packName) {
		String packPath = packName.replace(".", "/");
		String realPath = IDGenerator.class.getClassLoader().getResource(packPath).getPath();
		File dir = new File(realPath);
		for (File chiled : dir.listFiles()) {
			if (chiled.isDirectory()) {
				scan(packName + "." + chiled.getName());
			} else {
				try {
					int lastIndex = chiled.getName().indexOf(".");
					String name = chiled.getName().substring(0, lastIndex);
					Class<?> c = Class.forName(packName + "." + name);
					String parentKey = CacheUtil.getParentKey(c);
					AtomicLong atomicLong = idMap.get(parentKey);
					if (atomicLong == null) {
						atomicLong = idMap.get(parentKey);
						if (atomicLong == null) {
							atomicLong = new AtomicLong(getMaxId(c));
							idMap.put(parentKey, atomicLong);
						}
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

}
