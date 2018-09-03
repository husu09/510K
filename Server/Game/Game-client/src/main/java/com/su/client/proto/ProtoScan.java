package com.su.client.proto;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.google.protobuf.MessageLite;
import com.su.common.util.CommonUtil;

@Component
public class ProtoScan {

	private Logger logger = LoggerFactory.getLogger(ProtoScan.class);

	@Autowired
	private ProtoContext protoContext;
	
	@Value("${proto.packName}")
	private String protoPackName;

	/**
	 * 扫描指定包名下的所有 protobuf 协议
	 */
	public void scan(String packName) {
		String packPath = packName.replace(".", "/");
		String realPath = ProtoScan.class.getClassLoader().getResource(packPath).getPath();
		File dir = new File(realPath);
		for (File chiled : dir.listFiles()) {
			if (chiled.isDirectory()) {
				scan(packName + "." + chiled.getName());
			} else {
				try {
					int lastIndex = chiled.getName().indexOf(".");
					String name = chiled.getName().substring(0, lastIndex);
					String[] arr = name.split("\\$");
					if (arr.length == 2 && !arr[1].endsWith("OrBuilder") && !CommonUtil.isInteger(arr[1])) {
						Class<?> c = Class.forName(packName + "." + arr[0] + "$" + arr[1]);
						MessageLite messageLite = (MessageLite) c.getMethod("getDefaultInstance").invoke(null);
						protoContext.getMessageLiteMap().put(c.getSimpleName(), messageLite);
						protoContext.addSortMessageLite(arr[0], messageLite);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

	public void init() {
		scan(protoPackName);
		logger.info("扫描 {} 包下的proto协议成功", protoPackName);
	}
}
