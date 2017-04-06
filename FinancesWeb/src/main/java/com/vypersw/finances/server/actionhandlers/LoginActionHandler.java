package com.vypersw.finances.server.actionhandlers;

import javax.servlet.http.HttpServletRequest;

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.results.LoginActionResult;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.LoginService;

public class LoginActionHandler extends VyperActionHandler<LoginAction, LoginActionResult> {
	
	private LoginService service = (LoginService) LocalEJBServiceLocator.getInstance().getLoginService();
	private Provider<HttpServletRequest> req;

	@Inject
	public LoginActionHandler(final Provider<HttpServletRequest> req) {
		this.req = req;
	}
	
	@Override
	protected LoginActionResult executeAction(LoginAction action) {
		String username = action.getUsername();
		String password = action.getPassword();
		UserDTO dto = service.login(username, password);
		
		if (dto != null) {
			//Set the user id in the session so we can access it later.
			//Why won't we just store the DTO here? Don't want to
			//overload the session with clutter. Besides, the app presenter
			//will need to contact the server for this anyway... so why not just ask the db for it.
			req.get().getSession().setAttribute("userId", dto.getId());
		}
		
		LoginActionResult result = new LoginActionResult();
		result.setDto(dto);
		return result;
	}


}
