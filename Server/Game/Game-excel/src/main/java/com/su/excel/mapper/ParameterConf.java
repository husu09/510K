package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.common.constant.BagConst;
import com.su.common.constant.GamblingConst;
import com.su.common.constant.RankingConst;
import com.su.common.constant.XunBaoConst;
import com.su.common.util.ParseUtil;
import com.su.config.Parameter;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

@Component
public class ParameterConf extends AbstractExcelMapper<Parameter> {

	@Override
	public String getName() {
		return "1参数";
	}

	@Override
	public Parameter map(RowData rowData) {
		Parameter temp = new Parameter();
		temp.setId(rowData.getInt("id"));
		temp.setValue(rowData.getString("cs"));
		return temp;
	}
	
	/**
	 * 初始化常量
	 */
	@Override
	public void afterFinishLoad() {
		BagConst.DEF_LIMIT = ParseUtil.getInt(get(1).getValue());
		GamblingConst.DOUBLES_ITEM = ParseUtil.getItem(get(2).getValue());
		RankingConst.RANKING_SCORE = ParseUtil.getInt(get(3).getValue());
		XunBaoConst.LOW_COST = ParseUtil.getItem(get(4).getValue());
		XunBaoConst.MID_COST = ParseUtil.getItem(get(5).getValue());
		XunBaoConst.HIGH_COST = ParseUtil.getItem(get(6).getValue());
	}

}
