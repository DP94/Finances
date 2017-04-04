package com.vypersw.finances.server.actionhandlers;

import com.gwtplatform.dispatch.rpc.server.ExecutionContext;
import com.gwtplatform.dispatch.rpc.server.actionhandler.ActionHandler;
import com.gwtplatform.dispatch.shared.ActionException;
import com.vypersw.finances.client.actions.CreateUserAction;
import com.vypersw.finances.client.results.CreateUserActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

public class CreateUserActionHandler implements ActionHandler<CreateUserAction, CreateUserActionResult> {
	
	private UserService service = LocalEJBServiceLocator.getInstance().getUserService();
	
	@Override
	public CreateUserActionResult execute(CreateUserAction action, ExecutionContext context) throws ActionException {
		service.create(action.getDto());
		CreateUserActionResult result = new CreateUserActionResult();
		return result;
	}

	@Override
	public Class<CreateUserAction> getActionType() {
		return null;
	}

	@Override
	public void undo(CreateUserAction action, CreateUserActionResult result, ExecutionContext context)
			throws ActionException {
	}


}
