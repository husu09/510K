package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.config.ContestCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

@Component
public class ContestConf extends AbstractExcelMapper<ContestCo> {

	@Override
	public String getName() {
		return "B比赛";
	}

	@Override
	public ContestCo map(RowData rowData) {
		ContestCo t = new ContestCo();
		t.setId(rowData.getInt("id"));
		t.setBaseScore(rowData.getInt("csdf"));
		t.setAddedScore(rowData.getInt("dfzl"));
		t.setContestNum(rowData.getInt("csbss"));
		t.setInitScore(rowData.getInt("csjf"));
		t.setCost(rowData.getGoods("bmxh"));
		t.setPlayerNum(rowData.getInt("csrs"));
		return t;
	}

}
