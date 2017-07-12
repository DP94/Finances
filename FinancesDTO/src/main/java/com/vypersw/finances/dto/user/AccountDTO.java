package com.vypersw.finances.dto.user;

import java.io.Serializable;
import java.math.BigDecimal;

import com.vypersw.finances.dto.VyperDTO;
import com.vypersw.finances.enumeration.AccountType;

public class AccountDTO extends VyperDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String name;
	private String description;
	private Long accountId;
	private BigDecimal balance;
	private AccountType accountType;
	
	public AccountDTO() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public BigDecimal getBalance() {
		return balance;
	}

	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}

	public AccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}
}
