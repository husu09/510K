package com.su.test.concurrent;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class OverloadTest {
	
	public void save(Object o) {
		save(o);
	}
	
	private void saveT2(Collection<Object> o) {
		System.out.println("save(Collection<Object> o)");
	}
	
	private void saveT2(Object[] o) {
		System.out.println("save(Object[] o)");
	}
	
	public static void main(String[] args) {
		/*OverloadTest t = new OverloadTest();
		Object o = new Object();
		List list = new ArrayList<>();
		Integer[] arr = new Integer[]{1};
		t.saveT2(list);*/
		/*System.out.println(OverloadTest.class.getName());
		System.out.println(OverloadTest.class.getSimpleName());
		System.out.println(OverloadTest.class.getCanonicalName());
		System.out.println(OverloadTest.class.getTypeName());*/
		Object o = 1;
		System.out.println(o);
		
	}
}
