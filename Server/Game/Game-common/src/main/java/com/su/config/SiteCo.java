package com.su.config;
import com.su.common.obj.Item;
public class SiteCo {
	private int id;
	/**类型*/
	private int type;
	/**名称*/
	private String name;
	/**是否开放*/
	private boolean isOpen;
	/**底分*/
	private int baseScore;
	/**欢乐豆下限*/
	private int miniBean;
	/**欢乐豆上限*/
	private int maxBean;
	/**初始桌数*/
	private int initTableNum;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean getIsOpen() {
		return isOpen;
	}

	public void setIsOpen(boolean isOpen) {
		this.isOpen = isOpen;
	}

	public int getBaseScore() {
		return baseScore;
	}

	public void setBaseScore(int baseScore) {
		this.baseScore = baseScore;
	}

	public int getMiniBean() {
		return miniBean;
	}

	public void setMiniBean(int miniBean) {
		this.miniBean = miniBean;
	}

	public int getMaxBean() {
		return maxBean;
	}

	public void setMaxBean(int maxBean) {
		this.maxBean = maxBean;
	}

	public int getInitTableNum() {
		return initTableNum;
	}

	public void setInitTableNum(int initTableNum) {
		this.initTableNum = initTableNum;
	}
}