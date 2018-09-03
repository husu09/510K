package com.su.core.action;

import java.lang.reflect.Method;

/**
 * 封装请求执行者
 * */
public class ActionMeta {
	/**
	 * 是否需要登录
	 * */
	private boolean mustLogin;
	/**
	 * 方法执行者
	 * */
	private Object executor;
	/**
	 * 执行方法
	 * */
	private Method method;
	
	
	public ActionMeta(boolean mustLogin, Object executor, Method method) {
		this.mustLogin = mustLogin;
		this.executor = executor;
		this.method = method;
	}
	public boolean isMustLogin() {
		return mustLogin;
	}
	public void setMustLogin(boolean mustLogin) {
		this.mustLogin = mustLogin;
	}
	public Object getExecutor() {
		return executor;
	}
	public void setExecutor(Object executor) {
		this.executor = executor;
	}
	public Method getMethod() {
		return method;
	}
	public void setMethod(Method method) {
		this.method = method;
	}
	
	
	
}
