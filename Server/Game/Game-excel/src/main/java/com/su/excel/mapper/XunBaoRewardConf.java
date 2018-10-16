package com.su.excel.mapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.su.config.XunBaoRewardCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;



@Component
public class XunBaoRewardConf extends AbstractExcelMapper<XunBaoRewardCo> {
	
	private Map<Integer, List<XunBaoRewardCo>> typeMap = new HashMap<>();

	@Override
	public String getName() {
		return "X寻宝奖励";
	}

	@Override
	public XunBaoRewardCo map(RowData rowData) {
		XunBaoRewardCo co = new XunBaoRewardCo();
		co.setId(rowData.getInt("id"));
		co.setType(rowData.getInt("lx"));
		co.setItem(rowData.getItem("wp"));
		co.setRatio(rowData.getInt("gl"));
		return co;
	}

	@Override
	public void afterFinishLoad() {
		Map<Integer, List<XunBaoRewardCo>> tempMap = new HashMap<>();
		for (XunBaoRewardCo co : all()) {
			List<XunBaoRewardCo> list = tempMap.get(co.getType());
			if (list == null) {
				list = new ArrayList<>();
				tempMap.put(co.getType(), list);
			}
			list.add(co);
		}
		typeMap = tempMap;
	}
	
	public List<XunBaoRewardCo> getByType(int type) {
		return typeMap.get(type);
	}
	

}
