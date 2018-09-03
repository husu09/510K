package com.su.data.mq;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;
import com.su.common.mq.DataOperator;
import com.su.common.mq.MQMessage;
import com.su.common.util.CustomConvert;
import com.su.data.dao.BaseDao;

@Component
public class CustomerWorker {

	private Logger logger = LoggerFactory.getLogger(CustomerWorker.class);

	@Autowired
	private BaseDao dao;

	public void doWork(String message) {
		MQMessage mqMessage = JSON.parseObject(message, MQMessage.class);
		try {
			Object object = CustomConvert.parseObject(mqMessage.getData(), Class.forName(mqMessage.getClassName()));
			if (mqMessage.getMqOperator() == DataOperator.SAVE) {
				dao.save(object);
			} else if (mqMessage.getMqOperator() == DataOperator.UPDATE) {
				dao.update(object);
			} else if (mqMessage.getMqOperator() == DataOperator.DELETE) {
				dao.delete(object);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			logger.info("消费消息失败{}", message);
		}
	}

}
