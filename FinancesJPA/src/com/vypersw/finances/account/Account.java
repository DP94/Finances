package com.vypersw.finances.account;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_ACCOUNT")
public class Account implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "ACCOUNT_ID")
	private Long accountId;
	
	@Column(name = "ACCOUNT_NAME")
	private String name;
	
	@Column(name = "ACCOUNT_DESCRIPTION")
	private String description;
	
	@Column(name = "ACCOUNT_BALANCE")
	private BigDecimal balance;
	
	@Column(name = "ACCOUNT_TYPE")
	private Integer accountType;
	
	public Account() {
		
	}
	
	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
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

	public BigDecimal getBalance() {
		return balance;
	}

	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}

	public Integer getAccountType() {
		return accountType;
	}

	public void setAccountType(Integer accountType) {
		this.accountType = accountType;
	}	
}
