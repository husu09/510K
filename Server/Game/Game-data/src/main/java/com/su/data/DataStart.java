package com.su.data;

import java.util.Scanner;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.su.data.config.DataConfig;
import com.su.data.mq.MQCustomer;

public class DataStart {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DataConfig.class);
		System.out.println("==============================启动服务==============================");
		MQCustomer mqCustomer = context.getBean(MQCustomer.class);
		mqCustomer.start();
		System.out.println("输入stop关闭服务器：");
		Scanner sc = new Scanner(System.in);
		while (true) {
			String command = sc.nextLine();
			if (command.equals("stop")) {
				// 关闭服务器
				mqCustomer.stop();
				context.close();
				break;
			}
		}
		sc.close();
		System.out.println("==============================关闭服务==============================");
	}
}
