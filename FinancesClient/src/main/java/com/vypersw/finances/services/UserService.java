package com.vypersw.finances.services;

import com.vypersw.finances.dto.user.UserDTO;

public interface UserService {
	void create(UserDTO dto);
	UserDTO getById(Long userId);
}
