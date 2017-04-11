package com.vypersw.finances.beans;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.Query;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.dto.currency.CurrencyDTO;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.services.UserService;
import com.vypersw.finances.user.Currency;
import com.vypersw.finances.user.User;

@Stateless
@Local(UserService.class)
@TransactionAttribute(value = TransactionAttributeType.REQUIRES_NEW)
public class UserBean extends AbstractBean implements UserService {

	@Override
	public UserDTO modify(UserDTO dto) {
		User user = new User();
		user.setUserId(dto.getId());
		user.setEmail(dto.getEmail());
		user.setPassword(dto.getPassword());
		user.setUsername(dto.getUsername());
		Currency currency = new Currency();
		currency.setCurrencyCode(currencyCodeForId(dto.getCurrencyDTO().getCurrencyId()));
		currency.setCurrencyId(dto.getCurrencyDTO().getCurrencyId());
		user.setCurrency(currency);
		entityManager.merge(user);
		return dto;
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
		userDTO.setEmail(user.getEmail());
		userDTO.setPassword(user.getPassword());
		CurrencyDTO currencyDTO = new CurrencyDTO();
		currencyDTO.setCurrencyId(user.getCurrency().getCurrencyId());
		currencyDTO.setCurrencyCode(user.getCurrency().getCurrencyCode());
		userDTO.setCurrencyDTO(currencyDTO);
		return userDTO;
		
	}
	
	private String currencyCodeForId(Long id) {
		switch (id.intValue()) {
		case 1:
			return "GBP";
		case 2:
			return "EUR";
		case 3:
			return "USD";
		default:
			return "GBP";
		}
	}

}
