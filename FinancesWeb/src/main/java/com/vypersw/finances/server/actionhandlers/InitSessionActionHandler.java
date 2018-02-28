package com.vypersw.finances.server.actionhandlers;

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.vypersw.finances.client.actions.InitSessionAction;
import com.vypersw.finances.client.results.InitSessionActionResult;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
        HttpSession httpSession = req.get().getSession(false);
        InitSessionActionResult result = new InitSessionActionResult();
        if (httpSession == null) {
            result.setDto(null);
            return result;
        }
		userId = Long.parseLong("" + req.get().getSession().getAttribute("userId"));
		UserDTO dto = service.getById(userId);

        result.setDto(dto);
		return result;
	}

}
