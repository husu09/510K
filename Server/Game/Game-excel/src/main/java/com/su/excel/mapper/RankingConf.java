package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.config.RankingCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

@Component
public class RankingConf extends AbstractExcelMapper<RankingCo> {

	@Override
	public String getName() {
		return "D段位";
	}

	@Override
	public RankingCo map(RowData rowData) {
		RankingCo t = new RankingCo();
		t.setId(rowData.getInt("id"));
		t.setRiseScore(rowData.getInt("jqfs"));
		t.setReward(rowData.getGoods("dwjl"));
		t.setEddScoreRate(rowData.getInt("kfb"));
		return t;
	}

}
