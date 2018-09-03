package com.su.test.concurrent;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicReference;

public class Test {
	public static void main(String[] args) throws Exception {
		Person p1 = new Person(1, "personOne");
		
		AtomicReference<Person> atoPerson = new AtomicReference<Person>(p1);
		Person p2 = new Person(2, "personTwo");
		
		boolean compareAndSet = atoPerson.compareAndSet(p1, p2);
		System.out.println(compareAndSet);
		
		
	}
	
	
}
