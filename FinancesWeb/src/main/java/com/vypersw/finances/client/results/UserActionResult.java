package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.user.UserDTO;

public class UserActionResult extends VyperActionResult {
	private static final long serialVersionUID = 1L;
	private UserDTO dto;
	
	public UserDTO getDto() {
		return dto;
	}
	public void setDto(UserDTO dto) {
		this.dto = dto;
	}
}
