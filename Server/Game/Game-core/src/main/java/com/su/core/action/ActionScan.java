package com.su.core.action;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import com.su.common.util.SpringUtil;
import com.su.core.proto.ProtoContext;

/**
 * 加载所有的协议处理者
 */
@Component
public class ActionScan {

	private Logger logger = LoggerFactory.getLogger(ActionScan.class);

	@Autowired
	private ActionContext actionContext;
	@Autowired
	private ProtoContext protoContext;

	public void scan() {

		Map<String, Object> beans = SpringUtil.getContext().getBeansWithAnnotation(Controller.class);

		for (Object bean : beans.values()) {
			Method[] methods = bean.getClass().getMethods();
			for (Method method : methods) {
				if (method.isAnnotationPresent(Action.class)) {
					// 是否需要登录
					boolean mustLogin = method.getAnnotation(Action.class).mustLogin();
					Parameter parameter = method.getParameters()[1];
					String messageName = parameter.getType().getSimpleName();
					if (!protoContext.getMessageLiteMap().containsKey(messageName)) {
						logger.error("action message is not fined {}", messageName);
						continue;
					}
					if (messageName.endsWith("_") || messageName.startsWith("_")) {
						logger.error("action message is not request {}", messageName);
						continue;
					}
					if (actionContext.getActionMetaMap().containsKey(messageName)) {
						logger.error("repeat action message {}", messageName);
						continue;
					}
					actionContext.getActionMetaMap().put(messageName, new ActionMeta(mustLogin, bean, method));
				}
			}
		}
		logger.info("加载所有Action成功");
	}

}
