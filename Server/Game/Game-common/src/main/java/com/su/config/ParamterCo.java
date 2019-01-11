package com.su.config;
import com.su.common.obj.Item;
public class ParamterCo {
	private int id;
	/**参数*/
	private int valueInt;
	private Item valueItem;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getValueInt() {
		return valueInt;
	}

	public void setValueInt(int valueInt) {
		this.valueInt = valueInt;
	}

	public Item getValueItem() {
		return valueItem;
	}

	public void setValueItem(Item valueItem) {
		this.valueItem = valueItem;
	}
}