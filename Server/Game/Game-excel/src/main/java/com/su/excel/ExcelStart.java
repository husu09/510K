package com.su.excel;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.su.excel.core.ExcelProcessor;


public class ExcelStart {



	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(ExcelConfig.class);
		// 预处理配置
		context.getBean(ExcelProcessor.class).preProcesss();
		context.close();
	}
}
