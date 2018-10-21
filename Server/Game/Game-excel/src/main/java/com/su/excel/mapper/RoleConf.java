package com.su.excel.mapper;

import com.su.config.RoleCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

public class RoleConf extends AbstractExcelMapper<RoleCo> {

	@Override
	public String getName() {
		return "J角色";
	}

	@Override
	public RoleCo map(RowData rowData) {
		RoleCo co = new RoleCo();
		co.setId(rowData.getInt("id"));
		co.setTypeId(rowData.getInt("lxid"));
		co.setUpId(rowData.getInt("sjid"));
		co.setUpExp(rowData.getInt("sjjy"));
		co.setSkillId(rowData.getInt("jn"));
		co.setYaZhiDF(rowData.getInt("yzdf"));
		co.setJiaBeiDF(rowData.getInt("jbdf"));
		co.setShunziDF(rowData.getInt("xzdf"));
		co.setLianDuiDF(rowData.getInt("lddf"));
		co.setZhaDanDF(rowData.getInt("zddf"));
		co.setWskDF(rowData.getInt("wskdf"));
		co.setWangZhaDF(rowData.getInt("wzdf"));
		return null;
	}

}
