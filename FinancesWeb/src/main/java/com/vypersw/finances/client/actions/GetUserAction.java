package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.GetUserActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class GetUserAction extends VyperAction<GetUserActionResult> {
    private UserDTO userDTO;

    public GetUserAction() {
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
}
