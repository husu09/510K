package com.su.test;

import org.junit.Test;

import com.alibaba.fastjson.JSON;

public class JsonTest {
	
	static class Person {
		 public int age;
		 public String name;
	}
	
	@Test
	public void t1() {
		Person p1 = new Person();
		p1.age = 1;
		p1.name = "abc";
		
		String json = JSON.toJSONString(p1);
		System.out.println(json);
	}
}
