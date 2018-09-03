package com.su.core.data;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.MessageProperties;

@Component
public class MQProducer {
	
	private Logger logger = LoggerFactory.getLogger(MQProducer.class);
	
	@Value("${mq.queueName}")
	private String queueName;
	@Value("${mq.host}")
	private String host;
	private Channel channel;
	private Connection connection;

	public void start() {
		try {
			ConnectionFactory factory = new ConnectionFactory();
			factory.setHost(host);
			connection = factory.newConnection();
			channel = connection.createChannel();
			channel.queueDeclare(queueName, true, false, false, null);
			logger.info("初始化RabbitMQ成功{}:{}", host, factory.getPort());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void produce(String s) {
		// 发送消息到队列中
		try {
			channel.basicPublish("", queueName, MessageProperties.PERSISTENT_TEXT_PLAIN, s.getBytes("UTF-8"));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("发送消息到时 mq 失败 " + s);
		}
	}

	public void stop() {
		// 关闭通道和连接
		if (channel != null)
			try {
				channel.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		if (connection != null)
			try {
				connection.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		logger.info("关闭RabbitMQ");
	}
}
