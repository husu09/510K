package com.su.data.mq;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.rabbitmq.client.AMQP.BasicProperties;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Consumer;
import com.rabbitmq.client.DefaultConsumer;
import com.rabbitmq.client.Envelope;

@Component
public class MQCustomer {

	private Logger logger = LoggerFactory.getLogger(MQCustomer.class);

	@Value("${mq.queueName}")
	private String queueName;
	@Value("${mq.host}")
	private String host;
	private Connection connection;
	private Channel channel;
	@Autowired
	private CustomerWorker customerWorker;

	public void start() {
		try {
			ConnectionFactory factory = new ConnectionFactory();
			factory.setHost(host);
			connection = factory.newConnection();
			channel = connection.createChannel();
			channel.queueDeclare(queueName, true, false, false, null);
			channel.basicQos(1);
			Consumer consumer = new DefaultConsumer(channel) {

				@Override
				public void handleDelivery(String consumerTag, Envelope envelope, BasicProperties properties,
						byte[] body) throws IOException {
					String message = new String(body, "UTF-8");
					try {
						customerWorker.doWork(message);
					} finally {
						channel.basicAck(envelope.getDeliveryTag(), false);
					}
				}
			};
			boolean autoAck = false;
			channel.basicConsume(queueName, autoAck, consumer);
			logger.info("启动RabbitMQ服务成功");
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public void stop() {
		if (channel != null) {
			try {
				channel.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if (connection != null) {
			try {
				connection.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		logger.info("关务RabbitMQ服务");
	}
}
