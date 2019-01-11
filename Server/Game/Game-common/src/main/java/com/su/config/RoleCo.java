package com.su.config;
import com.su.common.obj.Item;
public class RoleCo {
	/**id*/
	private int id;
	/**角色名称*/
	private String name;
	/**类型id*/
	private int type;
	/**等级*/
	private int lv;
	/**升级id*/
	private int upId;
	/**升级经验*/
	private int upExp;
	/**压制得分*/
	private int yaZhiDF;
	/**加倍得分*/
	private int jiaBeiDF;
	/**顺子得分*/
	private int shunziDF;
	/**连对得分*/
	private int lianDuiDF;
	/**炸弹得分*/
	private int zhaDanDF;
	/**510K得分*/
	private int wskDF;
	/**王炸得分*/
	private int wangZhaDF;

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

	public int getLv() {
		return lv;
	}

	public void setLv(int lv) {
		this.lv = lv;
	}

	public int getUpId() {
		return upId;
	}

	public void setUpId(int upId) {
		this.upId = upId;
	}

	public int getUpExp() {
		return upExp;
	}

	public void setUpExp(int upExp) {
		this.upExp = upExp;
	}

	public int getYaZhiDF() {
		return yaZhiDF;
	}

	public void setYaZhiDF(int yaZhiDF) {
		this.yaZhiDF = yaZhiDF;
	}

	public int getJiaBeiDF() {
		return jiaBeiDF;
	}

	public void setJiaBeiDF(int jiaBeiDF) {
		this.jiaBeiDF = jiaBeiDF;
	}

	public int getShunziDF() {
		return shunziDF;
	}

	public void setShunziDF(int shunziDF) {
		this.shunziDF = shunziDF;
	}

	public int getLianDuiDF() {
		return lianDuiDF;
	}

	public void setLianDuiDF(int lianDuiDF) {
		this.lianDuiDF = lianDuiDF;
	}

	public int getZhaDanDF() {
		return zhaDanDF;
	}

	public void setZhaDanDF(int zhaDanDF) {
		this.zhaDanDF = zhaDanDF;
	}

	public int getWskDF() {
		return wskDF;
	}

	public void setWskDF(int wskDF) {
		this.wskDF = wskDF;
	}

	public int getWangZhaDF() {
		return wangZhaDF;
	}

	public void setWangZhaDF(int wangZhaDF) {
		this.wangZhaDF = wangZhaDF;
	}
}