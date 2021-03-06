package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.UserAction;
import com.vypersw.finances.client.results.UserActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

public class UserActionHandler extends VyperActionHandler<UserAction, UserActionResult> {
	
	private UserService service = LocalEJBServiceLocator.getInstance().getUserService();
	
	@Override
	protected UserActionResult executeAction(UserAction action) {
		UserActionResult result = new UserActionResult();
		result.setDto(service.modify(action.getDto()));
		return result;
	}


}
