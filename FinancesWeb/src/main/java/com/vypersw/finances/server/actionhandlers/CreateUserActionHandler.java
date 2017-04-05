package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.CreateUserAction;
import com.vypersw.finances.client.results.CreateUserActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

public class CreateUserActionHandler extends VyperActionHandler<CreateUserAction, CreateUserActionResult> {
	
	private UserService service = LocalEJBServiceLocator.getInstance().getUserService();
	
	@Override
	protected CreateUserActionResult executeAction(CreateUserAction action) {
		service.create(action.getDto());
		CreateUserActionResult result = new CreateUserActionResult();
		return result;
	}


}
