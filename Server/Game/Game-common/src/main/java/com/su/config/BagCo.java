package com.su.config;
import com.su.common.obj.Item;
public class BagCo {
	private int id;
	/**名称*/
	private String name;
	/**类型*/
	private int type;
	/**品质*/
	private int quality;
	/**使用类型*/
	private int useType;
	/**使用效果*/
	private int userEfftInt;
	private Item userEfftItem;
	/**有效期*/
	private int[] effTime;
	/**叠加上限*/
	private int limit;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public int getUserEfftInt() {
		return userEfftInt;
	}

	public void setUserEfftInt(int userEfftInt) {
		this.userEfftInt = userEfftInt;
	}

	public Item getUserEfftItem() {
		return userEfftItem;
	}

	public void setUserEfftItem(Item userEfftItem) {
		this.userEfftItem = userEfftItem;
	}

	public int[] getEffTime() {
		return effTime;
	}

	public void setEffTime(int[] effTime) {
		this.effTime = effTime;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
}