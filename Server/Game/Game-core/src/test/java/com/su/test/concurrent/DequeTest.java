package com.su.test.concurrent;

import java.util.concurrent.ConcurrentLinkedDeque;

public class DequeTest {
	public static void main(String[] args) {
		ConcurrentLinkedDeque<Integer> deque = new ConcurrentLinkedDeque<>();
		deque.offer(1);
		deque.offer(2);
		deque.offer(3);
		// peek() 方法返回队列的每一个元素
		System.out.println(deque.peek());
		System.out.println(deque.peek());
		System.out.println(deque.peek());
	}
}
