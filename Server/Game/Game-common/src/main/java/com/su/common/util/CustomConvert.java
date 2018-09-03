package com.su.common.util;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.persistence.Transient;

import com.alibaba.fastjson.JSON;

/**
 * 自定义序列化：包含类型中的基本类型和String类型数据，排除@Transient变量
 * */
public class CustomConvert {
	
	public static String toJSONString(Object obj) {
		Map<String, Object> map = null;
		Field[] declaredFields = obj.getClass().getDeclaredFields();
		for (Field field : declaredFields) {
			if (field.isAnnotationPresent(Transient.class))
				continue;
			if (field.getType().isPrimitive() || field.getType().isAssignableFrom(String.class)) {
				if (!field.isAccessible())
					field.setAccessible(true);
				if (map == null)
					map = new HashMap<>();
				try {
					map.put(field.getName(), field.get(obj));
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		return JSON.toJSONString(map);
	}
	
	public static <T> T parseObject(String text, Class<T> clazz) {
		Map<String, Object> map = (Map<String, Object>) JSON.parse(text);
		try {
			T t = clazz.getConstructor().newInstance();
			for (Entry<String, Object> e : map.entrySet()) {
				Field field = clazz.getDeclaredField(e.getKey());
				if (!field.isAccessible())
					field.setAccessible(true);
				field.set(t, e.getValue());
			}
			return t;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
