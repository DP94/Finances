package com.vypersw.finances.server.actionhandlers;

import com.gwtplatform.dispatch.rpc.server.ExecutionContext;
import com.gwtplatform.dispatch.rpc.server.actionhandler.ActionHandler;
import com.gwtplatform.dispatch.shared.ActionException;
import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.results.LoginActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.LoginService;

public class LoginActionHandler implements ActionHandler<LoginAction, LoginActionResult> {
	
	private LoginService service = (LoginService) LocalEJBServiceLocator.getInstance().getLoginService();
	
	@Override
	public LoginActionResult execute(LoginAction action, ExecutionContext context) throws ActionException {
		String username = action.getUsername();
		String password = action.getPassword();

		boolean test = service.login(username, password);
		
		
		LoginActionResult result = new LoginActionResult();
		result.setSuccess(test);
		return result;
	}

	@Override
	public Class<LoginAction> getActionType() {
		return null;
	}

	@Override
	public void undo(LoginAction arg0, LoginActionResult arg1, ExecutionContext arg2) throws ActionException {	
	}


}
