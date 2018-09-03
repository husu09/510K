package com.su.core.event;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;

import com.su.core.context.PlayerContext;
import com.su.msg.LoginMsg.Login_;

public class GameEventAdapter implements GameEvent {

	@Autowired
	private GameEventDispatcher gameEventDispatcher;

	@PostConstruct
	private void init() {
		gameEventDispatcher.register(this);
	}

	@Override
	public void serverStart() {

	}

	@Override
	public void serverStop() {

	}

	@Override
	public void dailyReset() {

	}

	@Override
	public void login(PlayerContext playerContext, Login_.Builder builder) {

	}

	@Override
	public void logout(PlayerContext playerContext) {

	}

	@Override
	public void dailyReset(PlayerContext playerContext) {

	}
}
