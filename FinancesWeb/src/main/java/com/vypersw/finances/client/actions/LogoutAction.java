package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.LogoutActionResult;

public class LogoutAction extends VyperAction<LogoutActionResult> {
	private static final long serialVersionUID = 1L;

	public LogoutAction() {
		
	}
	
	@Override
	public boolean isSecured() {
		return false;
	}
}
