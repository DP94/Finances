package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.GetUserAction;
import com.vypersw.finances.client.results.GetUserActionResult;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.UserService;

public class GetUserActionHandler extends VyperActionHandler<GetUserAction, GetUserActionResult> {

    private UserService userService = LocalEJBServiceLocator.getInstance().getUserService();

    @Override
    protected GetUserActionResult executeAction(GetUserAction action) {
        GetUserActionResult getUserActionResult = new GetUserActionResult();
        if (action.getUserDTO() != null) {
            UserDTO userDTO = userService.getById(action.getUserDTO().getId());
            getUserActionResult.setUserDTO(userDTO);
        }
        return getUserActionResult;
    }
}
