package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.user.UserDTO;

public class GetUserActionResult extends VyperActionResult {
    private UserDTO userDTO;

    public GetUserActionResult() {
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
}
