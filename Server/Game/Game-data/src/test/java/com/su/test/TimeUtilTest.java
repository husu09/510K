package com.su.test;

import org.junit.Test;

import com.su.common.util.TimeUtil;

public class TimeUtilTest {
	@Test
	public void t1() {
		System.out.println(TimeUtil.getZero());
		System.out.println(TimeUtil.getNextZero());
		System.out.println(TimeUtil.getWeekZero(1));
	}
}
