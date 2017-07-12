package com.vypersw.finances.dto.user;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.vypersw.finances.dto.VyperDTO;
import com.vypersw.finances.dto.currency.CurrencyDTO;

public class UserDTO extends VyperDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String username, password, email;
	private CurrencyDTO currencyDTO;
	private List<AccountDTO> accounts;
	
	public UserDTO() {
		accounts = new ArrayList<>();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public CurrencyDTO getCurrencyDTO() {
		return currencyDTO;
	}

	public void setCurrencyDTO(CurrencyDTO currencyDTO) {
		this.currencyDTO = currencyDTO;
	}

	public List<AccountDTO> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<AccountDTO> accounts) {
		this.accounts = accounts;
	}
}
