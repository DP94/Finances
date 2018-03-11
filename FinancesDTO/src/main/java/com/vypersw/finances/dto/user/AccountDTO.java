package com.vypersw.finances.dto.user;

import com.vypersw.finances.dto.VyperDTO;
import com.vypersw.finances.enumeration.AccountType;

import java.io.Serializable;
import java.math.BigDecimal;

public class AccountDTO extends VyperDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String name;
	private String description;
	private Long accountId;
	private BigDecimal balance;
	private AccountType accountType;
	private BigDecimal accountBalanceTarget;
    private long userId;
	
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

	public BigDecimal getAccountBalanceTarget() {
		return accountBalanceTarget;
	}

	public void setAccountBalanceTarget(BigDecimal accountBalanceTarget) {
		this.accountBalanceTarget = accountBalanceTarget;
	}

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
