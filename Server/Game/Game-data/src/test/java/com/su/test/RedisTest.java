package com.su.test;

import redis.clients.jedis.Jedis;

public class RedisTest {
	public static void main(String[] args) {
		Jedis jedis = new Jedis("127.0.0.1", 9999);
		jedis.auth("redis123456");
		
	
	}
	

	
}
