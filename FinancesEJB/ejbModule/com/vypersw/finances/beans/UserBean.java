package com.vypersw.finances.beans;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.Query;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.dto.currency.CurrencyDTO;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.services.UserService;
import com.vypersw.finances.user.User;

@Stateless
@Local(UserService.class)
public class UserBean extends AbstractBean implements UserService {

	@Override
	public void create(UserDTO dto) {
		
	}

	@Override
	public UserDTO getById(Long userId) {
		User user = new User();
		Query query = entityManager.createQuery("SELECT u FROM User u WHERE u.userId = :userid")
								   .setParameter("userid", userId);
		user = (User) query.getSingleResult();
		if (user == null) {
			return null;
		}

		UserDTO userDTO = new UserDTO();
		userDTO.setId(user.getUserId());
		userDTO.setUsername(user.getUsername());
		userDTO.setPassword(user.getPassword());
		CurrencyDTO currencyDTO = new CurrencyDTO();
		currencyDTO.setCurrencyId(user.getCurrency().getCurrencyId());
		currencyDTO.setCurrencyCode(user.getCurrency().getCurrencyCode());
		currencyDTO.setSymbol(user.getCurrency().getSymbol());
		userDTO.setCurrencyDTO(currencyDTO);
		return userDTO;
		
	}

}
