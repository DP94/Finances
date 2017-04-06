package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.user.UserDTO;

public class InitSessionActionResult extends VyperActionResult {
	private static final long serialVersionUID = 1L;

	private UserDTO dto;
	
	public InitSessionActionResult() {
		
	}

	public UserDTO getDto() {
		return dto;
	}

	public void setDto(UserDTO dto) {
		this.dto = dto;
	}
}
