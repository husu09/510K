package com.su.excel;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.su.excel.core.GenerateJSON;
import com.su.excel.core.LoadConf;


public class ExcelStart {



	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(ExcelConfig.class);
		// 预处理配置
		context.getBean(GenerateJSON.class).generate();
	    context.getBean(LoadConf.class).load();
		context.close();
	}
}
