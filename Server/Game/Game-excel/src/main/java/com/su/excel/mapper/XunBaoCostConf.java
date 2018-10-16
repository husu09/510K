package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.config.XunBaoCostCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;



@Component
public class XunBaoCostConf extends AbstractExcelMapper<XunBaoCostCo> {
	

	@Override
	public String getName() {
		return "X寻宝花费";
	}

	@Override
	public XunBaoCostCo map(RowData rowData) {
		XunBaoCostCo co = new XunBaoCostCo();
		co.setId(rowData.getInt("id"));
		co.setCost(rowData.getItem("hf"));
		co.setRewardCount(rowData.getInt("jlgs"));
		return co;
	}
	

}
