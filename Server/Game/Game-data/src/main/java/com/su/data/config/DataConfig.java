package com.su.data.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.remoting.rmi.RmiServiceExporter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.alibaba.druid.pool.DruidDataSource;
import com.su.common.rmi.DataRmiService;

@Configuration
@ComponentScan(basePackages = { "com.su" })
@PropertySource("dataConfig.properties")
// @ImportResource("classpath:applicationContext.xml")
@EnableTransactionManagement
public class DataConfig {

	@Value("${jdbc.driverClassName}")
	private String driverClassName;

	@Value("${jdbc.url}")
	private String url;

	@Value("${jdbc.username}")
	private String name;

	@Value("${jdbc.password}")
	private String password;

	@Value("${hibernate.dialect}")
	private String dialect;

	@Value("${hibernate.show_sql}")
	private String show_sql;

	@Value("${hibernate.format_sql}")
	private String format_sql;

	@Value("${hibernate.hbm2ddl.auto}")
	private String auto;

	@Bean
	public DruidDataSource dataSource() {
		DruidDataSource dataSource = new DruidDataSource();
		dataSource.setDriverClassName(driverClassName);
		dataSource.setUrl(url);
		dataSource.setUsername(name);
		dataSource.setPassword(password);
		return dataSource;
	}

	@Bean
	public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
		LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
		sessionFactoryBean.setDataSource(dataSource);
		sessionFactoryBean.setPackagesToScan("com.su.common.po");
		Properties properties = sessionFactoryBean.getHibernateProperties();
		properties.setProperty("hibernate.hbm2ddl.auto", auto);
		properties.setProperty("hibernate.dialect", dialect);
		properties.setProperty("hibernate.show_sql", show_sql);
		properties.setProperty("hibernate.format_sql", format_sql);
		return sessionFactoryBean;
	}

	@Bean
	public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
		return new HibernateTransactionManager(sessionFactory);
	}

	@Bean
	public RmiServiceExporter rmiServiceExporter(DataRmiService dataRmiService) {
		RmiServiceExporter exporter = new RmiServiceExporter();
		exporter.setService(dataRmiService);
		exporter.setServiceName("DataRmiService");
		exporter.setServiceInterface(DataRmiService.class);
		exporter.setRegistryPort(10001);
		return exporter;
	}

}
