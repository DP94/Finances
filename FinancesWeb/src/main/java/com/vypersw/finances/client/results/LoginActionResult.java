package com.vypersw.finances.client.results;

import com.gwtplatform.dispatch.rpc.shared.SimpleResult;
import com.vypersw.finances.dto.user.UserDTO;

public class LoginActionResult extends SimpleResult<Void> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private UserDTO dto;
	
	public LoginActionResult() {
		super(null);
	}

	public UserDTO getDto() {
		return dto;
	}

	public void setDto(UserDTO dto) {
		this.dto = dto;
	}
}
