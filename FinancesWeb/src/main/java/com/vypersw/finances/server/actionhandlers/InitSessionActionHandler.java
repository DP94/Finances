package com.vypersw.finances.server.actionhandlers;

import javax.servlet.http.HttpServletRequest;

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.vypersw.finances.client.actions.InitSessionAction;
import com.vypersw.finances.client.results.InitSessionActionResult;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

public class InitSessionActionHandler extends VyperActionHandler<InitSessionAction, InitSessionActionResult> {
	private static final long serialVersionUID = 1L;

	private UserService service = LocalEJBServiceLocator.getInstance().getUserService();
	
	private Provider<HttpServletRequest> req;
	
	@Inject
	public InitSessionActionHandler(final Provider<HttpServletRequest> req) {
		this.req = req;
	}
	
	
	@Override
	protected InitSessionActionResult executeAction(InitSessionAction action) {
		Long userId = new Long(0);
		userId = Long.parseLong("" + req.get().getSession().getAttribute("userId"));
		UserDTO dto = service.getById(userId);
		InitSessionActionResult result = new InitSessionActionResult();
		result.setDto(dto);
		return result;
	}

}
