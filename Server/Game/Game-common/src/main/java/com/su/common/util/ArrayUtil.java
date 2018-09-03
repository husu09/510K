package com.su.common.util;

public class ArrayUtil {
	/**
	 * 获取数组中的元素数量
	 */
	public static <T> int getCount(T[] arr) {
		int count = 0;
		for (int i = 0; i < arr.length; i++)
			if (arr[i] != null)
				count++;
		return count;
	}

	/**
	 * 添加元素到数组中
	 */
	public static <T> boolean add(T[] arr, T element) {
		T t = arr[arr.length - 1];
		if (t != null)
			return false;
		for (int i = 0; i < arr.length; i++)
			if (arr[i] == null)
				arr[i] = element;
		return true;
	}

	/**
	 * 获取数组中的最后一个元素
	 */
	public static <T> T getLast(T[] arr) {
		T lastElement = null;
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == null)
				break;
			lastElement = arr[i];
		}
		return lastElement;
	}
	
	/**
	 * 清除数组
	 * */
	public static <T> void clear(T[] arr) {
		for (int i = 0; i < arr.length; i ++)
			arr[i] = null;
	}
}
