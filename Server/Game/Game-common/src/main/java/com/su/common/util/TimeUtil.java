package com.su.common.util;

import java.util.Calendar;
import java.util.Date;

public class TimeUtil {
	public final static int ONE_SECOND = 1000;
	public final static int ONE_MINUTE = 1000 * 60;
	public final static int ONE_DAY = 1000 * 60 * 24;
	
	/**
	 * 获取当前时间/毫秒
	 * @return
	 */
	public static long getCurrTime() {
		return System.currentTimeMillis();
	}
	
	/**
	 * 获取零点
	 * */
	public static long getZero() {
		Calendar c = Calendar.getInstance();
		c.setTime(new Date());
		c.set(Calendar.HOUR_OF_DAY, 0);
		c.set(Calendar.MINUTE, 0);
		c.set(Calendar.SECOND, 0);
		return c.getTimeInMillis();
	}
	
	/**
	 * 获取下一个零点
	 * */
	public static long getNextZero() {
		Calendar c = Calendar.getInstance();
		c.setTime(new Date());
		c.set(Calendar.HOUR_OF_DAY, 0);
		c.set(Calendar.MINUTE, 0);
		c.set(Calendar.SECOND, 0);
		c.add(Calendar.DATE, 1);
		return c.getTimeInMillis();
	}
	
	/**
	 * 获取下一个周几的零点
	 * */
	public static long getWeekZero(int weekDay) {
		Calendar c = Calendar.getInstance();
		c.setTime(new Date());
		c.set(Calendar.HOUR_OF_DAY, 0);
		c.set(Calendar.MINUTE, 0);
		c.set(Calendar.SECOND, 0);
		int currWeekDay = c.get(Calendar.DAY_OF_WEEK) - 1;
		int spaceDay  = 0;
		if (weekDay > currWeekDay)
			spaceDay = weekDay - currWeekDay;
		else 
			spaceDay = 7 - (currWeekDay - weekDay);
		c.add(Calendar.DATE, spaceDay);
		return c.getTimeInMillis();
	}
}
