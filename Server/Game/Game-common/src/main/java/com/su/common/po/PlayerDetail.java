package com.su.common.po;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.alibaba.fastjson.JSON;
import com.su.common.data.Cache;
import com.su.common.obj.Grid;

@Cache
@Entity
public class PlayerDetail {
	@Id
	private long id;
	/**
	 * 背包
	 */
	private String bagData;
	@Transient
	private List<Grid> gridList;
	
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

	public int getContinueWinCount() {
		return continueWinCount;
	}

	public void setContinueWinCount(int continueWinCount) {
		this.continueWinCount = continueWinCount;
	}
	
	

}
