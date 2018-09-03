package com.su.excel.mapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.su.config.ContestRewardCo;
import com.su.excel.core.AbstractExcelMapper;
import com.su.excel.core.RowData;

@Component
public class ContestRewardConf extends AbstractExcelMapper<ContestRewardCo> {

	/**
	 * <比赛，[配置]>
	 */
	private Map<Integer, List<ContestRewardCo>> map = new HashMap<>();

	@Override
	public String getName() {
		return "B比赛奖励";
	}

	@Override
	public ContestRewardCo map(RowData rowData) {
		ContestRewardCo t = new ContestRewardCo();
		t.setId(rowData.getInt("id"));
		t.setConstId(rowData.getInt("bsid"));
		t.setRanking(rowData.getInt("mc"));
		t.setReward(rowData.getGoods("jl"));
		return t;
	}

	@Override
	public void afterFinishLoad() {
		Map<Integer, List<ContestRewardCo>> tempMap = new HashMap<>();
		for (ContestRewardCo co : all()) {
			List<ContestRewardCo> list = tempMap.get(co.getConstId());
			if (list == null) {
				list = new ArrayList<>();
				tempMap.put(co.getConstId(), list);
			}
			list.add(co);
		}
		map = tempMap;
	}

	/**
	 * 通过名次查找奖励
	 */
	public ContestRewardCo getRewardByRanking(int contestId, int ranking) {
		List<ContestRewardCo> list = map.get(contestId);
		if (list != null) {
			for (int i = list.size(); i >= 0; i--) {
				if (list.get(i).getRanking() == ranking)
					return list.get(i);
			}
		}
		return null;
	}
	
	/**
	 * 获取奖励个数
	 * */
	public int getRewardCount(int contestId) {
		List<ContestRewardCo> list = map.get(contestId);
		int count = 0;
		if (list != null)
			count = list.size();
		return count;
	}

}
