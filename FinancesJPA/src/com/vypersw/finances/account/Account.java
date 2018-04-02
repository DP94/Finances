package com.vypersw.finances.account;

import com.vypersw.finances.VyperJPA;
import com.vypersw.finances.user.User;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "TBL_ACCOUNT")
public class Account implements VyperJPA {

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

	@Column(name = "ACCOUNT_BALANCE_TARGET")
	private BigDecimal accountBalanceTarget;

	@ManyToOne(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name="USER_ID")
	private User user;

	@OneToMany(mappedBy = "account", orphanRemoval = true)
	private List<Transaction> transactions;

	@OneToMany(mappedBy = "account", orphanRemoval = true)
	private List<AccountPermission> accountPermissions;

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

	public BigDecimal getAccountBalanceTarget() {
		return accountBalanceTarget;
	}

	public void setAccountBalanceTarget(BigDecimal accountBalanceTarget) {
		this.accountBalanceTarget = accountBalanceTarget;
	}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

	public List<Transaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
	}

	public List<AccountPermission> getAccountPermissions() {
		return accountPermissions;
	}

	public void setAccountPermissions(List<AccountPermission> accountPermissions) {
		this.accountPermissions = accountPermissions;
	}
}
