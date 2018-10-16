package com.su.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.hibernate.engine.transaction.jta.platform.internal.SynchronizationRegistryBasedSynchronizationStrategy;
import org.junit.Test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.alibaba.fastjson.serializer.JSONSerializer;
import com.alibaba.fastjson.serializer.PropertyPreFilter;
import com.alibaba.fastjson.serializer.SerializeConfig;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.su.common.obj.Role;
import com.su.common.po.PlayerDetail;
import com.su.common.util.CustomConvert;

public class JsonTest {
	
	@Test
	public void fastJsonTest() {
		/**
		 * FastJson 序列化对象时：
		 * 1. 默认不包含为 Null 的字段
		 * 2. 默认不包含没有 get 方法的字段
		 * */
		PlayerDetail playerDetail = new PlayerDetail(0);
		//playerDetail.setGridList( new ArrayList<>());
		//playerDetail.setBagData("bagData");
		String str = JSON.toJSONString(playerDetail);
		System.out.println(str);
		
		Map<String, Object> map = new HashMap<>();
		map.put("bagData", "bagData");
		map.put("gridList",  new ArrayList<>());
		String str2 = JSON.toJSONString(playerDetail);
		System.out.println(str2);
		
	}
	
	/**
	 * FastJson 序列化规则：
	 * 1. 不包含 private 属性
	 * 2. 包含 public 属性，不包含值为 Null 的属性
	 * 3. 包含有 get 方法的属性，不包含值为 Null 的属性
	 * */
	@Test
	public void jsonTest() {
		
		
		Person person = new Person();
		//String str = JSON.toJSONString(person);
		// 是否格式化
		// String str = JSON.toJSONString(person, true);
		String str = JSON.toJSONString(person);
		System.out.println(str);
		person = JSON.parseObject(str, Person.class);
		System.out.println(person);
	}
	
	
	
	@Test
	public void customTest() {
		PlayerDetail playerDetail = new PlayerDetail(0);
		String str = CustomConvert.toJSONString(playerDetail);
		System.out.println(str);
	}
	
	@Test
	public void mapTest() {
		Role role = new Role();
		role.setRid(1001);
		Map<Integer, Role> map = new HashMap<>();
		map.put(role.getRid(), role);
		
		String str = JSON.toJSONString(map, true);
		
		Map<Integer, JSONObject> aftMap =  (Map<Integer, JSONObject>) JSON.parse(str);
		
		JSONObject jsonObj = aftMap.get(1001);
		
		role = jsonObj.toJavaObject(Role.class);
		
		System.out.println(role);
	}
	
	@Test
	public void mapTest2() {
		Role role = new Role();
		role.setRid(1001);
		Map<Integer, Role> map = new HashMap<>();
		map.put(role.getRid(), role);
		
		String str = JSON.toJSONString(map, true);
		
		Map<Integer, Role> aftMap =  JSON.parseObject(str, new TypeReference<Map<Integer, Role>>(){
			
		});
		
		role = aftMap.get(1001);
		
		System.out.println(role);
	}
	
}
