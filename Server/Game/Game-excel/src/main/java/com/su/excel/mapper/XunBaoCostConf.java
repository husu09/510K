package com.su.excel.mapper;
import org.springframework.stereotype.Component;
import com.su.config.XunBaoCostCo;
import com.su.excel.core.BaseMapper;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import java.util.LinkedHashMap;
///start
///end
@Component
public class XunBaoCostConf extends BaseMapper<XunBaoCostCo> {

	@Override
	public void mapper(String str) {
		storageMap = JSON.parseObject(str, new TypeReference<LinkedHashMap<Integer, XunBaoCostCo>>(){});
	}

	///start
	///end
}