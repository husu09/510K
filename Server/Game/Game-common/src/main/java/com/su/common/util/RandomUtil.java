package com.su.common.util;

import java.util.List;
import java.util.Random;

public class RandomUtil {
	public static interface IRandom {
		public int getId();
		public int getRatio();
	}
	
	/**
	 * 随机一个id
	 * */
	public static IRandom random(List<? extends IRandom> list) {
		int sum = 0;
		for (IRandom r : list) {
			sum += r.getRatio();
		}
		Random random = new Random();
		int value = random.nextInt(sum) + 1;
		sum = 0;
		for (IRandom r : list) {
			sum += r.getRatio();
			if (sum >= value) {
				return r;
			}
		}
		return null;
	}
	
	/**
	 * 随机一个不重复的id
	 * */
	public static IRandom randomNotRepeat(List<? extends IRandom> list, List<? extends IRandom> excList) {
		int sum = 0;
		for (IRandom r : list) {
			if (!excList.contains(r)) {
				sum += r.getRatio();
			}
		}
		Random random = new Random();
		int value = random.nextInt(sum) + 1;
		sum = 0;
		for (IRandom r : list) {
			if (!excList.contains(r)) {
				sum += r.getRatio();
				if (sum >= value) {
					return r;
				}
			}
		}
		return null;
	}

}
