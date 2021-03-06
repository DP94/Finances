package com.vypersw.finances.beans;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.Query;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.jpahelpers.LoginJPAHelper;
import com.vypersw.finances.services.LoginService;
import com.vypersw.finances.user.User;

@Stateless
@Local(LoginService.class)
public class LoginBean extends AbstractBean implements LoginService {

	public LoginBean() {
	}

	@Override
	public UserDTO login(String username, String password) {
		if (username != null && !username.equals("") && password != null && !password.equals("")) {
			LoginJPAHelper loginJPAHelper = new LoginJPAHelper(entityManager);
			User user = loginJPAHelper.getUserByName(username);
			if (user == null) {
				return null;
			}
			if (user.getPassword().equals(password)) {
				UserDTO userDTO = new UserDTO();
				userDTO.setId(user.getUserId());
				userDTO.setUsername(user.getUsername());
				userDTO.setPassword(user.getPassword());
				return userDTO;
			}
		}
		return null;
	}
}
