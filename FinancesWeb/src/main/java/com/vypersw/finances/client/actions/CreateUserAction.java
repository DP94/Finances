package com.vypersw.finances.client.actions;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.vypersw.finances.client.results.CreateUserActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class CreateUserAction extends ActionImpl<CreateUserActionResult> implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private UserDTO dto;
	
	public CreateUserAction() {
		
	}
	
	@Override
	public boolean isSecured() {
		return false;
	}

	public UserDTO getDto() {
		return dto;
	}

	public void setDto(UserDTO dto) {
		this.dto = dto;
	}
	
}