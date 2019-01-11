package com.su.server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.su.common.obj.Item;
import com.su.common.po.AucItem;
import com.su.common.po.Player;
import com.su.common.util.TimeUtil;
import com.su.core.context.PlayerContext;
import com.su.core.data.CacheUtil;
import com.su.core.data.DataService;
import com.su.core.data.RedisClient;
import com.su.core.event.GameEventAdapter;
import com.su.msg.AuctionMsg.AucItemMo;

@Service
public class AuctionService extends GameEventAdapter {
	
	@Autowired
	private RedisClient redisClient;
	@Autowired
	private DataService dataService;
	@Autowired
	private PlayerService playerService;
	
	
	private String getKey(int type, int monType) {
		return CacheUtil.getParentKey(AucItem.class) + "_" + type + "_" + monType;
	}
	
	/**
	 * 添加物品
	 * */
	public void addAucItem(PlayerContext ctx, AucItem AucItem) {
		AucItem.setPlayerId(ctx.getPlayerId());
		AucItem.setEndTime(TimeUtil.getCurrTime() + TimeUtil.ONE_DAY * 3);
		dataService.save(AucItem);
		String value = JSON.toJSONString(AucItem);
		redisClient.hset(getKey(AucItem.getType(), AucItem.getMonType()), String.valueOf(AucItem.getId()), value);
	}
	
	/**
	 * 删除物品
	 * */
	public void delAucItem(PlayerContext ctx, AucItem AucItem) {
		dataService.delete(AucItem);
		redisClient.hdel(getKey(AucItem.getType(), AucItem.getMonType()), String.valueOf(AucItem.getId()));
	}
	
	/**
	 * 获取物品
	 * */
	public AucItem getAucItem(String key, long id) {
		String val = redisClient.hget(key, String.valueOf(id));
		if (val != null)
			return JSON.parseObject(val, AucItem.class);
		return dataService.get(AucItem.class, id);
	}
	
	/**
	 * 获取物品 
	 * @param priceSort 价格小：1，价格大：-1
	 * @return
	 */
	public List<AucItem>  getAucItems(int type, int monType, int priceSort) {
		List<String> hvals = redisClient.hvals(getKey(type, monType));
		if (hvals == null)
			return null;
		List<AucItem> items = new ArrayList<>(hvals.size());
		for (String val : hvals) {
			items.add(JSON.parseObject(val, AucItem.class));
		}
		// 默认排序 价格小 < 品质大 < 时间少
		Collections.sort(items, new Comparator<AucItem>() {
			@Override
			public int compare(AucItem o1, AucItem o2) {
				if (o1.getPrice() < o2.getPrice()) 
					return priceSort;
				if (o1.getQuality() > o2.getQuality())
					return 1;
				if (o1.getEndTime() < o2.getEndTime())
					return 1;
				return 0;
			}
		});
		return items;
	}
	
	public AucItemMo serialize(AucItem aucItem) {
		AucItemMo.Builder aucItemMo = AucItemMo.newBuilder();
		aucItemMo.setId(aucItem.getId());
		aucItemMo.setEndTime(aucItem.getEndTime());
		Player player = playerService.getPlayer(aucItem.getPlayerId());
		aucItemMo.setPlayerName(player.getName());
		aucItemMo.setMonType(aucItem.getMonType());
		aucItemMo.setPrice(aucItem.getPrice());
		Item item = new Item();
		item.setType(aucItem.getType());
		item.setSysId(aucItem.getSysId());
		item.setCount(aucItem.getCount());;
		aucItemMo.setItem(item.serialize());
		return aucItemMo.build();
	}
	
}
