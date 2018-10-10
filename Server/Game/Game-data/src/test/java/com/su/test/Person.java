package com.su.test;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;
@JSONType(includes = {"id"})
public class Person {
		private int id = 10;
		private String name;
		
		public int getId() {
			return id;
		}

		@Override
		public String toString() {
			// TODO Auto-generated method stub
			return super.toString();
		}
		
		
}