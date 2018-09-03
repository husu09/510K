package com.su.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.su.common.po.Player;
import com.su.data.config.DataConfig;
import com.su.data.dao.BaseDao;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DataConfig.class})
public class HibernateTest {
	
	@Autowired
	private BaseDao baseDao;
	
	@Test
	public void testDao() {
		Player p1 = new Player();
		p1.setId(10002);
		//p1.setName("person2");
		baseDao.save(p1);
	}
}
