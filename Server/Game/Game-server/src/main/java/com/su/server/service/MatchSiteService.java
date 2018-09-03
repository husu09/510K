package com.su.server.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.config.SiteCo;
import com.su.core.event.GameEventAdapter;
import com.su.core.game.ClassicSite;
import com.su.core.game.MatchSite;
import com.su.core.game.RankingSite;
import com.su.core.game.enums.SiteType;
import com.su.excel.mapper.SiteConf;

@Service
public class MatchSiteService extends GameEventAdapter {

	private Map<Integer, MatchSite> matchSiteMap = new ConcurrentHashMap<>();

	@Autowired
	private SiteConf siteConf;

	@Override
	public void serverStart() {
		// 匹配场
		for (SiteCo siteCo : siteConf.all()) {
			if (siteCo.isOpen()) {
				if (siteCo.getSiteType() == SiteType.CLASSIC.getValue())
					matchSiteMap.put(siteCo.getId(), new ClassicSite(siteCo));
				else if (siteCo.getSiteType() == SiteType.RANKING.getValue())
					matchSiteMap.put(siteCo.getId(), new RankingSite(siteCo));
			}
		}
	}

	public Map<Integer, MatchSite> getMatchSiteMap() {
		return matchSiteMap;
	}

	

}
