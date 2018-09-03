package com.su.core.data;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class TransactionAop {
	@Autowired
	private TransactionManager transactionManager;

	@Around("execution (* com.su.server..*.*(..)) && @annotation(com.su.core.data.Transaction)")
	public Object transactionProcess(ProceedingJoinPoint pj) throws Throwable {
		Object result = null;
		boolean isOccurExpletion = false;
		try {
			// 执行目标方法
			transactionManager.addCallStackCount();
			result = pj.proceed();
			transactionManager.eddCallStackCount();

		} catch (Throwable e) {
			isOccurExpletion = true;
			transactionManager.eddCallStackCount();
			throw e;
		} finally {
			if (transactionManager.getCallStackCount() == 0)
				if (isOccurExpletion)
					transactionManager.rollblack();
				else
					transactionManager.commit();

		}
		return result;
	}
}
