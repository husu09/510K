package com.su.common.util;

import java.util.List;

public class RandomUtil {
	public static interface IRandom {
		public int getId();
		public int getRatio();
	}
	
	/**
	 * 随机一个id
	 * */
	public int random(List<IRandom> list) {
		return 0;
	}
	
	/**
	 * 随机一个不重复的id
	 * */
	public int randomNotRepeat(List<IRandom> list, List<IRandom> excList) {
		return 0;
	}
}
