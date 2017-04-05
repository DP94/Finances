package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.results.LoginActionResult;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.LoginService;

public class LoginActionHandler extends VyperActionHandler<LoginAction, LoginActionResult> {
	
	private LoginService service = (LoginService) LocalEJBServiceLocator.getInstance().getLoginService();

	@Override
	protected LoginActionResult executeAction(LoginAction action) {
		String username = action.getUsername();
		String password = action.getPassword();
		UserDTO dto = service.login(username, password);
		LoginActionResult result = new LoginActionResult();
		result.setDto(dto);
		return result;
	}


}
