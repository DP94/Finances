package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.GetUserAction;
import com.vypersw.finances.client.results.GetUserActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

public class GetUserActionHandler extends VyperActionHandler<GetUserAction, GetUserActionResult> {

    private UserService userService = LocalEJBServiceLocator.getInstance().getUserService();

    @Override
    protected GetUserActionResult executeAction(GetUserAction action) {
        GetUserActionResult getUserActionResult = new GetUserActionResult();
        getUserActionResult.setUserDTO(userService.getById(action.getUserDTO().getId()));
        return getUserActionResult;
    }
}
