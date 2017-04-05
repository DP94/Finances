package com.vypersw.finances.client.actions;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.vypersw.finances.client.results.CreateUserActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class CreateUserAction extends VyperAction<CreateUserActionResult> {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private UserDTO dto;
	
	public CreateUserAction() {
		
	}
	
	public UserDTO getDto() {
		return dto;
	}

	public void setDto(UserDTO dto) {
		this.dto = dto;
	}
	
}
