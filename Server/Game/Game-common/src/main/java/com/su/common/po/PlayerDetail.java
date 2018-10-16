package com.su.common.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.su.common.data.Cache;
import com.su.common.obj.Grid;
import com.su.common.obj.Role;
import com.su.common.util.CustomConvert;

@Cache
@Entity
public class PlayerDetail implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	private long id;
	/**
	 * 背包
	 */
	private String bagData;
	@Transient
	private List<Grid> gridList;
	
	/**
	 * 角色
	 * */
	private String roleData;
	@Transient
	private Map<Integer, Role> roleMap;
	public Map<Integer, Role> getRoleMap() {
		if (roleMap == null) {
			roleMap = JSON.parseObject(roleData, new TypeReference<Map<Integer, Role>>() {});
			if (roleMap == null)
				roleMap = new HashMap<>();
		}
		return roleMap;
	}
	public void updateRoleData() {
		roleData = JSON.toJSONString(getRoleMap());
	}
	
	/**
	 * 寻宝
	 * */
	private String xunBaoData;
	@Transient
	private Map<Integer,Long> xunBaoMap;
	public Map<Integer,Long> getXunBaoMap() {
		if (xunBaoMap == null) {
			xunBaoMap = JSON.parseObject(xunBaoData, new TypeReference<Map<Integer,Long>>(){});
			if (xunBaoMap == null)
				xunBaoMap = new HashMap<>();
		}
		return xunBaoMap;
	}
	public void updateXunBaoData() {
		xunBaoData = JSON.toJSONString(getXunBaoMap());
	}
	
	/**
	 * 连胜次数
	 * */
	private int continueWinCount;
	
	public PlayerDetail() {
		
	}
	
	public PlayerDetail(long id){
		this.id = id;
	}
	
	public long getId() {
		return id;
	}
	
	public int getContinueWinCount() {
		return continueWinCount;
	}

	public void setContinueWinCount(int continueWinCount) {
		this.continueWinCount = continueWinCount;
	}

	public List<Grid> getGridList() {
		if (gridList == null) {
			gridList = JSON.parseArray(bagData, Grid.class);
			if (gridList == null)
				gridList = new ArrayList<>();

		}
		return gridList;
	}

	public void updateBagData() {
		bagData = JSON.toJSONString(getGridList());
	}
	

}
