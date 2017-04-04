package com.vypersw.finances.beans;

import javax.ejb.Local;
import javax.ejb.Stateless;

import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.services.UserService;

@Stateless
@Local(UserService.class)
public class UserBean implements UserService {

	@Override
	public void create(UserDTO dto) {
		
	}

}
