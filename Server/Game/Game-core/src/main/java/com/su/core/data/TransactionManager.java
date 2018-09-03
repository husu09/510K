package com.su.core.data;

import java.util.Collection;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.su.common.mq.DataOperator;

/**
 * 处理事务
 */
@Component
public class TransactionManager {
	
	private ThreadLocal<TransactionData> threadLocal = new ThreadLocal<>();
	private ThreadLocal<Integer> callStackCount = new ThreadLocal<>();

	@Autowired
	private MQService mqService;
	@Autowired
	private MemoryCacheService memoryService;
	@Autowired
	private RedisService redisService;
	
	/**
	 * 获取调用栈层数
	 * */
	public int getCallStackCount() {
		Integer count = callStackCount.get();
		if (count != null)
			return count;
		else 
			return 0;
	}
	
	/**
	 * 增加调用栈层数
	 * */
	public void addCallStackCount() {
		Integer count = callStackCount.get();
		if (count == null) {
			callStackCount.set(1);
		} else {
			callStackCount.set(count + 1); 
		}
	}
	
	/**
	 * 减少调用栈层数
	 * */
	public void eddCallStackCount() {
		Integer count = callStackCount.get();
		if (count != null) {
			callStackCount.set(count - 1); 
		}
	}
	
	/**
	 * 获取每个线程独立的事务数据
	 * */
	private TransactionData getTransactionData() {
		TransactionData transactionData = threadLocal.get();
		if (transactionData == null) {
			transactionData = new TransactionData();
			threadLocal.set(transactionData);
		}
		return transactionData;

	}
	
	/**
	 * 记录一个事务中所有的数据库操作，成功时提交，失败时清空
	 * */
	public void addDataOperator(DataOperator dataOperator, Collection<Object> os) {
		if (os == null)
			return;
		TransactionData transactionData = getTransactionData();
		for (Object o : os)
			transactionData.getLazyDataOperator().put(dataOperator, o);
	}

	public void addDataOperator(DataOperator dataOperator, Object o) {
		if (o == null)
			return;
		TransactionData transactionData = getTransactionData();
		transactionData.getLazyDataOperator().put(dataOperator, o);
	}
	
	/**
	 * 记录事件中操作的对象，失败时直接清其在内存和 reids 中的缓存
	 * */
	public void addCache(Collection<Object> os) {
		if (os == null)
			return;
		TransactionData transactionData = getTransactionData();
		for (Object o : os)
			transactionData.getCacheData().add(o);
	}

	public void addCache(Object o) {
		if (o == null)
			return;
		TransactionData transactionData = getTransactionData();
		transactionData.getCacheData().add(o);
	}

	/**
	 * 提交
	 */
	public void commit() {
		// 延时操作
		TransactionData transactionData = getTransactionData();
		for (Entry<DataOperator, Object> e : transactionData.getLazyDataOperator().entrySet()) {
			mqService.common(e.getKey(), e.getValue());
		}
		transactionData.getLazyDataOperator().clear();
		// 缓存
		transactionData.getCacheData().clear();

	}

	/**
	 * 回滚
	 */
	public void rollblack() {
		// 延时操作
		TransactionData transactionData = getTransactionData();
		transactionData.getLazyDataOperator().clear();
		// 缓存
		for (Object o : transactionData.getCacheData()) {
			if (CacheUtil.isMemoryCache(o))
				memoryService.delete(o);
			if (CacheUtil.isRedisCache(o))
				redisService.delete(o);
		}
		transactionData.getCacheData().clear();
	}

}
