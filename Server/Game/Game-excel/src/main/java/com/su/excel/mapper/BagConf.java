package com.su.excel.mapper;

import org.springframework.stereotype.Component;

import com.su.common.constant.BagConst;
import com.su.common.constant.EffectConst;
import com.su.config.BagCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

@Component
public class BagConf extends AbstractExcelMapper<BagCo> {

	@Override
	public String getName() {
		return "D道具";
	}

	@Override
	public BagCo map(RowData rowData) {
		BagCo temp = new BagCo();
		temp.setId(rowData.getInt("id"));
		temp.setType(rowData.getInt("lx"));
		temp.setQuality(rowData.getInt("pz"));
		temp.setUseType(rowData.getInt("sylx"));
		if (temp.getUseType() == 1) {
			// 数值类型
			temp.setUseNum(rowData.getInt("syxg"));
		} else if (temp.getUseType() == 2) {
			// 资源类型
			temp.setUseItem(rowData.getItem("syxg"));
		}
		int[] effData = rowData.getIntArr("yxq");
		if (effData != null) {
			temp.setEffTyep(effData[0]);
			temp.setEffValue(effData[1]);
		}
		int limit = rowData.getInt("djsx");
		limit = limit == 0 ? BagConst.DEF_LIMIT : limit;
		temp.setLimit(limit);
		return temp;
	}

}
