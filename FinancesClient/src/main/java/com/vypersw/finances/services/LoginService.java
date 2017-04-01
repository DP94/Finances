package com.vypersw.finances.services;

import com.vypersw.finances.dto.user.UserDTO;

public interface LoginService {
	public UserDTO login(String name, String password);
}
