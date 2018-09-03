package com.su.server;

import java.util.Scanner;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.su.core.action.ActionScan;
import com.su.core.akka.AkkaContext;
import com.su.core.context.GameContext;
import com.su.core.data.IDGenerator;
import com.su.core.data.MQProducer;
import com.su.core.data.RedisClient;
import com.su.core.event.GameEventDispatcher;
import com.su.core.netty.NettyServer;
import com.su.core.proto.ProtoScan;
import com.su.core.schedule.ScheduleManager;
import com.su.excel.core.ExcelProcessor;
import com.su.server.config.ServerConfig;

public class ServerStart {

	public static void main(String[] args) throws Exception {

		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(ServerConfig.class);
		System.out.println("==============================启动服务==============================");
		// 加载配置
		context.getBean(ExcelProcessor.class).reload();
		// 初始化 id 生成器
		context.getBean(IDGenerator.class).init();
		// 初始化 redis
		RedisClient redisClient = context.getBean(RedisClient.class);
		redisClient.init();
		// 初始化 mq
		MQProducer mqProducer = context.getBean(MQProducer.class);
		mqProducer.start();
		// 扫描协议
		ProtoScan protoScan = context.getBean(ProtoScan.class);
		protoScan.init();
		// 扫描 Action
		context.getBean(ActionScan.class).scan();
		// 启动网络服务
		NettyServer nettyServer = context.getBean(NettyServer.class);
		nettyServer.start();
		// 服务器启动事件
		GameEventDispatcher gameEventDispatcher = context.getBean(GameEventDispatcher.class);
		gameEventDispatcher.serverStart();
		// 初始化定时任务管理器
		ScheduleManager scheduleManager = context.getBean(ScheduleManager.class);
		scheduleManager.start();
		// 设置接受请求
		GameContext gameContext = context.getBean(GameContext.class);
		gameContext.setAccept(true);
		
		System.out.println("输入stop关闭服务器：");
		Scanner sc = new Scanner(System.in);
		while (true) {
			String command = sc.nextLine();
			if (command.equals("stop")) {
				// 设置不接受请求
				gameContext.setAccept(false);
				// 关闭网络服务
				nettyServer.stop();
				// 关闭 mq
				mqProducer.stop();
				// 关闭 redis
				redisClient.destroy();
				// 关闭 akka
				AkkaContext.close();
				// 服务器关闭事件
				gameEventDispatcher.serverStop();
				// 关闭定时任务管理器
				scheduleManager.stop();
				
				context.close();
				break;
			}
		}
		
		sc.close();
		System.out.println("==============================关闭服务==============================");
	}

}
