package com.vypersw.finances.server.actionhandlers;

import javax.servlet.http.HttpServletRequest;

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.gwtplatform.dispatch.rpc.server.ExecutionContext;
import com.gwtplatform.dispatch.rpc.server.actionhandler.ActionHandler;
import com.gwtplatform.dispatch.shared.ActionException;
import com.vypersw.finances.client.actions.LogoutAction;
import com.vypersw.finances.client.results.LogoutActionResult;

public class LogoutActionHandler extends VyperActionHandler<LogoutAction, LogoutActionResult> {

	private Provider<HttpServletRequest> req;
	
	@Inject
	public LogoutActionHandler(final Provider<HttpServletRequest> req) {
		this.req = req;
	}
	
	@Override
	protected LogoutActionResult executeAction(LogoutAction action) {
		
		if (req.get().getSession(false) != null) {
			req.get().getSession(false).invalidate();
		}
		
		LogoutActionResult result = new LogoutActionResult();
		return result;
	}

	
	

}
