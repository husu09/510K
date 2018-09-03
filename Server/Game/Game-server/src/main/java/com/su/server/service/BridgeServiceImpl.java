package com.su.server.service;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.su.common.po.Player;
import com.su.core.game.Site;
import com.su.core.game.TableResult;
import com.su.core.game.service.BridgeService;
import com.su.msg.TableMsg._GamePlayerResult;

@Service
public class BridgeServiceImpl implements BridgeService {

	@Autowired
	private MatchSiteService matchSiteService;
	@Autowired
	private ContestSiteService contestService;
	@Autowired
	private PlayerGameService playerGameService;
	@Autowired
	private PlayerService playerService;
	
	
	private AtomicReference<Set<Site>> atoSiteSet = new AtomicReference<>();


	@Override
	public Set<Site> getSiteSet() {
		if (atoSiteSet.get() == null) {
			Set<Site> siteSet = new HashSet<>();
			siteSet.addAll(matchSiteService.getMatchSiteMap().values());
			siteSet.addAll(contestService.getContestSiteMap().values());
			atoSiteSet.compareAndSet(null, siteSet);
		}
		return atoSiteSet.get();
	}


	@Override
	public _GamePlayerResult doTableResult(TableResult tableResult) {
		return playerGameService.doTableResult(tableResult);
	}


	@Override
	public void doContestClose(int ranking) {
		playerGameService.doContestClose(ranking);
	}


	@Override
	public Player getPlayerById(long id) {
		return playerService.getPlayerById(id);
	}

}
