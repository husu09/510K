package com.su.server.control;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.su.common.constant.SysAttr;
import com.su.common.obj.Grid;
import com.su.common.po.AucItem;
import com.su.common.po.PlayerDetail;
import com.su.config.BagCo;
import com.su.core.action.Action;
import com.su.core.context.PlayerContext;
import com.su.excel.mapper.BagConf;
import com.su.msg.AuctionMsg.BuyAucItem;
import com.su.msg.AuctionMsg.DownAucItem;
import com.su.msg.AuctionMsg.DownAucItemTo;
import com.su.msg.AuctionMsg.GetAucItem;
import com.su.msg.AuctionMsg.GetAucItemTo;
import com.su.msg.AuctionMsg.GetMyAucItem;
import com.su.msg.AuctionMsg.GetMyAucItemTo;
import com.su.msg.AuctionMsg.UpAucItem;
import com.su.server.service.AuctionService;
import com.su.server.service.BagService;
import com.su.server.service.PlayerService;
import com.su.server.service.ResourceService;

@Controller
public class AuctionControl {
	
	@Autowired
	private AuctionService auctionService;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private BagService bagService;
	@Autowired
	private BagConf bagConf;
	@Autowired
	private ResourceService resourceService;
	
	/**
	 * 每页数量 10
	 * */
	private int pageCnt = 10;
	
	/**
	 * 获取拍卖物品信息
	 * */
	@Action
	public void getAuction(PlayerContext ctx, GetAucItem req) {
		if (req.getPage() < 1) {
			ctx.sendError(1002);
			return;
		}
		List<AucItem> acuItems = auctionService.getAucItems(req.getType(), req.getMonType(), req.getPriceSort());
		GetAucItemTo.Builder resp = GetAucItemTo.newBuilder();
		if (acuItems != null) {
			// 总页数
			int totalPage = acuItems.size() % pageCnt == 0 ? acuItems.size() % pageCnt : acuItems.size() % pageCnt + 1;
			resp.setTotalPag(totalPage);
			// 显示物品
			int startIndex = req.getPage() * pageCnt;
			int limit = startIndex + pageCnt > acuItems.size() ? acuItems.size() : startIndex + pageCnt;
			for (int i = startIndex; i < limit; i ++) {
				resp.addAucItem(auctionService.serialize(acuItems.get(i)));
			}
		}
		ctx.write(resp);
	}
	
	/**
	 * 获取我拍卖的物品
	 * */
	@Action
	public void getMyAucItem(PlayerContext ctx, GetMyAucItem req) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		GetMyAucItemTo.Builder resp = GetMyAucItemTo.newBuilder();
		Map<Long, String> myAcuItemMap = playerDetail.getMyAcuItemMap();
		for (Entry<Long, String> e : myAcuItemMap.entrySet()) {
			AucItem aucItem = auctionService.getAucItem(e.getValue(), e.getKey());
			resp.addMyItem(auctionService.serialize(aucItem));
		}
		ctx.write(resp);
	}
	
	/**
	 * 上架
	 * */
	@Action
	public void upAucItem(PlayerContext ctx, UpAucItem req) {
		// 参数验证
		if (req.getMonType() != SysAttr.DIAMOND || req.getMonType() != SysAttr.PEANUT || 
				req.getPrice() < 1) {
			ctx.sendError(1002);
			return;
		}
		// 获取格子
		Grid grid = bagService.getGrid(ctx, req.getIndex());
		if (grid == null) {
			ctx.sendError(1002);
			return;
		}
		// 扣除格子
		if (!bagService.eddItemByIndex(ctx, req.getIndex(), req.getCount(), 2007)) {
			return;
		}
		// 添加物品
		AucItem aucItem = new AucItem();
		aucItem.setType(grid.getType());
		aucItem.setSysId(grid.getSysId());
		aucItem.setCount(req.getCount());
		BagCo bagCo = bagConf.get(grid.getSysId());
		aucItem.setQuality(bagCo.getQuality());
		aucItem.setMonType(req.getMonType());
		aucItem.setPrice(req.getPrice());
		auctionService.addAucItem(ctx, aucItem);
	}
	
	/**
	 * 下架
	 * */
	@Action
	public void downAucItem(PlayerContext ctx, DownAucItem req) {
		PlayerDetail playerDetail = playerService.getPlayerDetail(ctx.getPlayerId());
		String key = playerDetail.getMyAcuItemMap().get(req.getId());
		if (key == null) {
			ctx.sendError(7001);
			return;
		}
		// 删除物品
		AucItem aucItem = auctionService.getAucItem(key, req.getId());
		auctionService.delAucItem(ctx, aucItem);
		playerDetail.getMyAcuItemMap().remove(req.getId());
		// 添加到背包
		resourceService.add(ctx, aucItem.getType(), aucItem.getSysId(), aucItem.getCount(), 1006);
		
		DownAucItemTo.Builder resp = DownAucItemTo.newBuilder();
		resp.setId(req.getId());
		ctx.write(resp);
		
	}
	
	/**
	 * 购买
	 * */
	@Action
	public void buyAucItem(PlayerContext ctx, BuyAucItem req) {
		
	}
}
