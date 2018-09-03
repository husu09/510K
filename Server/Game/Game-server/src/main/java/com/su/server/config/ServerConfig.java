package com.su.server.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.PropertySource;
import org.springframework.remoting.rmi.RmiProxyFactoryBean;

import com.su.common.rmi.DataRmiService;

@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)
@ComponentScan(basePackages = { "com.su" })
@PropertySource("serverConfig.properties")
public class ServerConfig {
	
	private Logger logger = LoggerFactory.getLogger(ServerConfig.class);
	
	@Value("${dataRmi.url}")
	private String dataRmiUrl;

	@Bean
	public RmiProxyFactoryBean dataRmiService() {
		RmiProxyFactoryBean rmiProxy = new RmiProxyFactoryBean();
		rmiProxy.setServiceUrl(dataRmiUrl);
		rmiProxy.setServiceInterface(DataRmiService.class);
		return rmiProxy;
	}

}
