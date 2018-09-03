package com.su.core.akka;

import java.lang.reflect.Constructor;

import akka.actor.ActorSystem;
import akka.actor.TypedActor;
import akka.actor.TypedProps;
import akka.japi.Creator;

public class AkkaContext {

	private static final ActorSystem system = ActorSystem.create("GAME");
	
	/**
	 * 创建actor
	 */
	public static <T> T createActor(Class<T> implementCls) {
		return TypedActor.get(system).typedActorOf(new TypedProps<T>(implementCls));
	}

	/**
	 * 创建actor
	 */
	public static <T> T createActor(Class<T> interfaceCls, Class<T> implementCls) {
		return TypedActor.get(system).typedActorOf(new TypedProps<T>(interfaceCls, implementCls));
	}

	/**
	 * 创建actor（带参数的）
	 */
	public static <T> T createActor(Class<T> interfaceCls, Class implementCls, Object... objs) {
		return TypedActor.get(system).typedActorOf(new TypedProps<T>(interfaceCls, new Creator<T>() {
			@Override
			public T create() throws Exception {
				Class[] classzs = new Class[objs.length];
				for (int i = 0; i < objs.length; i++) {
					classzs[i] = objs[i].getClass();
				}
				Constructor[] constructors = implementCls.getConstructors();
				Constructor matchCnst = null;
				for (Constructor cnst : constructors) {
					boolean isMatch = true;
					if (cnst.getParameterTypes().length == classzs.length) {
						for (int i = 0; i < cnst.getParameterTypes().length; i++){
							if (!cnst.getParameterTypes()[i].isAssignableFrom(classzs[i])) {
								isMatch = false;
								break;
							}
						}
					}
					if (isMatch){
						matchCnst = cnst;
						break;
					}
				}
				if (matchCnst == null)
					throw new RuntimeException("No match Constructor");
				return (T) matchCnst.newInstance(objs);
			}
		}));
	}

	/**
	 * 关闭actorySystem
	 * */
	public static void close() {
		system.terminate();
	}
	
	/**
	 * 关闭 acotr
	 * */
	public static void stop(Object obj) {
		TypedActor.get(system).stop(obj);
	}
	
	/**
	 * 关闭 acotr（等待所有调用完成后关闭）
	 * */
	public static void poisonPill(Object obj) {
		TypedActor.get(system).poisonPill(obj);
	}
	

}
