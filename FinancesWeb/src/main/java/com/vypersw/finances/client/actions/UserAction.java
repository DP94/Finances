package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.UserActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class UserAction extends VyperAction<UserActionResult> {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private UserDTO dto;
	
	public UserAction() {
		
	}
	
	public UserDTO getDto() {
		return dto;
	}

	public void setDto(UserDTO dto) {
		this.dto = dto;
	}
	
}
