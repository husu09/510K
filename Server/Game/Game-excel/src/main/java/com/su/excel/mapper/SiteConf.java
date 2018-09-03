package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.config.SiteCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

@Component
public class SiteConf extends AbstractExcelMapper<SiteCo> {

	@Override
	public String getName() {
		return "Y游戏";
	}

	@Override
	public SiteCo map(RowData rowData) {
		SiteCo t = new SiteCo();
		t.setId(rowData.getInt("id"));
		t.setSiteType(rowData.getInt("lx"));
		t.setOpen(rowData.getBoolean("sfkf"));
		t.setBaseScore(rowData.getInt("df"));
		t.setMiniBean(rowData.getInt("rczdxz"));
		t.setMaxBean(rowData.getInt("rczgxz"));
		t.setInitTableNum(rowData.getInt("cszs"));
		t.setRankingAddition(rowData.getInt("bwdfjc"));
		return t;
	}

}
