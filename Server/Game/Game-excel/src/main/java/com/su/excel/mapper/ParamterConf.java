package com.su.excel.mapper;
import org.springframework.stereotype.Component;
import com.su.config.ParamterCo;
import com.su.excel.core.BaseMapper;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import java.util.LinkedHashMap;
///start
import com.su.common.constant.BagConst;
import com.su.common.constant.GamblingConst;
///end
@Component
public class ParamterConf extends BaseMapper<ParamterCo> {

	@Override
	public void mapper(String str) {
		storageMap = JSON.parseObject(str, new TypeReference<LinkedHashMap<Integer, ParamterCo>>(){});
	}

	///start
	@Override
	public void finishLoad() {
		BagConst.DEF_LIMIT = this.get(1).getValueInt();
		GamblingConst.DOUBLES_ITEM = this.get(2).getValueItem();
	}
	///end
}