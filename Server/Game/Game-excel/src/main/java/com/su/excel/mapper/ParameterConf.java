package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.common.constant.BagConst;
import com.su.common.constant.GamblingConst;
import com.su.common.constant.RankingConst;
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
	public void beforeFinishLoad() {
		BagConst.DEF_LIMIT = ParseUtil.getInt(get(1).getValue());
		GamblingConst.DOUBLES_ITEM = ParseUtil.getGoods(get(2).getValue());
		RankingConst.RANKING_SCORE = ParseUtil.getInt(get(3).getValue());
	}

	@Override
	public void afterFinishLoad() {
		beforeFinishLoad();
	}

}
