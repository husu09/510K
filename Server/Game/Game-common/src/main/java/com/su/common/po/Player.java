package com.su.common.po;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.su.common.data.Cache;

@Cache(startId = 10000000000L)
@Entity
public class Player implements Serializable {
	
	@Id
	private long id;
	/**
	 * 账号
	 */
	private String account;
	/**
	 * 头像
	 * */
	private String avatar;
	/**
	 * 名称
	 * */
	private String name;
	/**
	 * 性别
	 * */
	private int gender;
	/**
	 * 花生
	 * */
	private int bean;
	/**
	 * 钻石
	 * */
	private int diamond;
	
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
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public int getBean() {
		return bean;
	}
	public void setBean(int bean) {
		this.bean = bean;
	}
	public int getDiamond() {
		return diamond;
	}
	public void setDiamond(int diamond) {
		this.diamond = diamond;
	}
	
}
