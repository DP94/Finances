package com.vypersw.finances.beans;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.account.Account;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.dto.user.UserDTO;
import com.vypersw.finances.enumeration.AccountType;
import com.vypersw.finances.jpahelpers.UserJPAHelper;
import com.vypersw.finances.services.UserService;
import com.vypersw.finances.user.User;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

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
		entityManager.merge(user);
		return dto;
	}

	@Override
	public UserDTO getById(Long userId) {
		UserJPAHelper userJPAHelper = new UserJPAHelper(entityManager);
		User user = userJPAHelper.findById(User.class, userId);
		if (user == null) {
			return null;
		}

		UserDTO userDTO = new UserDTO();
		userDTO.setId(user.getUserId());
		userDTO.setUsername(user.getUsername());
		userDTO.setEmail(user.getEmail());
		userDTO.setPassword(user.getPassword());
		
		if (user.getAccounts() != null && !user.getAccounts().isEmpty()) {
			for (Account account : user.getAccounts()) {
				AccountDTO dto = new AccountDTO();
				dto.setAccountId(account.getAccountId());
				dto.setName(account.getName());
				dto.setDescription(account.getDescription());
				dto.setBalance(account.getBalance());
				dto.setAccountType(AccountType.forValue(account.getAccountType()));
				dto.setAccountBalanceTarget(account.getAccountBalanceTarget());
				userDTO.getAccounts().add(dto);
			}
		}
		
		return userDTO;
		
	}
}
