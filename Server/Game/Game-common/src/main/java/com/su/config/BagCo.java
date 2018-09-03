package com.su.config;

import com.su.common.obj.Goods;

public class BagCo {
	private int id;
	/**
	 * 类型
	 */
	private int type;
	/**
	 * 品质
	 */
	private int quality;
	/**
	 * 使用类型
	 */
	private int useType;
	/**
	 * 使用效果
	 */
	private Goods useItem;
	private int useNum;
	/**
	 * 有效期
	 * */
	private int effTyep;
	private int effValue;
	/**
	 * 叠加上限
	 */
	private int limit;

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

	public int getQuality() {
		return quality;
	}

	public void setQuality(int quality) {
		this.quality = quality;
	}

	public int getUseType() {
		return useType;
	}

	public void setUseType(int useType) {
		this.useType = useType;
	}

	public Goods getEffectItem() {
		return useItem;
	}

	public void setEffectItem(Goods effectItem) {
		this.useItem = effectItem;
	}

	public int getEffectNum() {
		return useNum;
	}

	public void setEffectNum(int effectNum) {
		this.useNum = effectNum;
	}

	public Goods getUseItem() {
		return useItem;
	}

	public void setUseItem(Goods useItem) {
		this.useItem = useItem;
	}

	public int getUseNum() {
		return useNum;
	}

	public void setUseNum(int useNum) {
		this.useNum = useNum;
	}
	
	public int getEffTyep() {
		return effTyep;
	}

	public void setEffTyep(int effTyep) {
		this.effTyep = effTyep;
	}

	public int getEffValue() {
		return effValue;
	}

	public void setEffValue(int effValue) {
		this.effValue = effValue;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
}
