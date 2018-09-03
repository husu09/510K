package com.su.core.data;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * redis 客户端
 */
@Component
public class RedisClient {

	@Value("${redis.host}")
	private String host;
	@Value("${redis.port}")
	private int port;
	@Value("${redis.password}")
	private String password;

	private JedisPool pool;

	private static Logger logger = LoggerFactory.getLogger(RedisClient.class);

	public void init() {
		JedisPoolConfig config = new JedisPoolConfig();
		pool = new JedisPool(config, host, port, 60000, password);
		Jedis jedis = getResource();
		returnResource(jedis);
		logger.info("初始redis成功{}:{}", host, port);
	}

	public void destroy() {
		pool.close();
		logger.info("关闭redis");
	}

	/**
	 * 获取资源
	 */
	public Jedis getResource() {
		return pool.getResource();
	}

	/**
	 * 释放资源
	 */
	public void returnResource(Jedis jedis) {
		if (jedis != null)
			jedis.close();
	}

	/**
	 * 获取值
	 */
	public String get(String key) {
		Jedis jedis = null;
		String value = null;
		try {
			jedis = getResource();
			value = jedis.get(key);
		} finally {
			returnResource(jedis);
		}
		return value;
	}

	/**
	 * 删除key
	 */
	public long del(String key) {
		long result = 0;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.del(key);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	public String set(String key, String value) {
		String result = null;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.set(key, value);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	public String set(String key, String value, int seconds) {
		String result = null;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.setex(key, seconds, value);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	/**
	 * 获取hash表中的值
	 */
	public String hget(String key, String field) {
		String value = null;
		Jedis jedis = null;
		try {
			jedis = getResource();
			value = jedis.hget(key, field);
		} finally {
			returnResource(jedis);
		}
		return value;
	}

	/**
	 * 获取hash表中所有值
	 */
	public List<String> hvals(String key) {
		List<String> value = null;
		Jedis jedis = null;
		try {
			jedis = getResource();
			value = jedis.hvals(key);
		} finally {
			returnResource(jedis);
		}
		return value;
	}

	/**
	 * 设置hash表中的值
	 */
	public long hset(String key, String field, String value) {
		long result = 0;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.hset(key, field, value);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	/**
	 * 删除hash表中的值
	 */
	public long hdel(String key, String field) {
		long result = 0;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.hdel(key, field);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	/**
	 * hash表中是否包含指定的key
	 */
	public boolean hexists(String key, String field) {
		boolean result = false;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.hexists(key, field);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	/**
	 * 向set中添加值
	 */

	public long sadd(String key, String member) {
		long result = 0;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.sadd(key, member);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	/**
	 * 删除set中的值
	 */
	public long srem(String key, String member) {
		long result = 0;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.srem(key, member);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

	/**
	 * 判断set 中是否包含在成员
	 */
	public boolean sismember(String key, String member) {
		boolean result = false;
		Jedis jedis = null;
		try {
			jedis = getResource();
			result = jedis.sismember(key, member);
		} finally {
			returnResource(jedis);
		}
		return result;
	}

}
