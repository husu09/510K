package com.su.common.po;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.su.common.data.Cache;

@Cache
@Entity
public class Player implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	private long id;
	/**
	 * 账号
	 */
	private String account;
	/**
	 * 头像
	 * */
	private String picture;
	/**
	 * 名称
	 * */
	private String name;
	/**
	 * 性别
	 * */
	private int sex;
	/**
	 * 头衔
	 * */
	private int title;
	/**
	 * 花生
	 * */
	private int peanut;
	/**
	 * 钻石
	 * */
	private int diamond;
	/**
	 * 胜率
	 * */
	private int winRate;
	/**
	 * 最高连胜
	 * */
	private int winStreak;
	/**
	 * 总对局
	 * */
	private int totalGames;
	/**
	 * 最高倍数
	 * */
	private int highMultiple;
	/**
	 * 累计赢花生
	 * */
	private int totalPeanut;
	/**
	 * 加倍次数
	 * */
	private int doubleCount;
	/**
	 * 出牌次数
	 * */
	private int playCount;
	/**
	 * 压制次数
	 * */
	private int suppressCount;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public int getTitle() {
		return title;
	}
	public void setTitle(int title) {
		this.title = title;
	}
	public int getPeanut() {
		return peanut;
	}
	public void setPeanut(int peanut) {
		this.peanut = peanut;
	}
	public int getDiamond() {
		return diamond;
	}
	public void setDiamond(int diamond) {
		this.diamond = diamond;
	}
	public int getWinRate() {
		return winRate;
	}
	public void setWinRate(int winRate) {
		this.winRate = winRate;
	}
	public int getWinStreak() {
		return winStreak;
	}
	public void setWinStreak(int winStreak) {
		this.winStreak = winStreak;
	}
	public int getTotalGames() {
		return totalGames;
	}
	public void setTotalGames(int totalGames) {
		this.totalGames = totalGames;
	}
	public int getHighMultiple() {
		return highMultiple;
	}
	public void setHighMultiple(int highMultiple) {
		this.highMultiple = highMultiple;
	}
	public int getTotalPeanut() {
		return totalPeanut;
	}
	public void setTotalPeanut(int totalPeanut) {
		this.totalPeanut = totalPeanut;
	}
	public int getDoubleCount() {
		return doubleCount;
	}
	public void setDoubleCount(int doubleCount) {
		this.doubleCount = doubleCount;
	}
	public int getPlayCount() {
		return playCount;
	}
	public void setPlayCount(int playCount) {
		this.playCount = playCount;
	}
	public int getSuppressCount() {
		return suppressCount;
	}
	public void setSuppressCount(int suppressCount) {
		this.suppressCount = suppressCount;
	}
	
}
