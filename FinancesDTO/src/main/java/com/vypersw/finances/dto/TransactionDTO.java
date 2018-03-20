package com.vypersw.finances.dto;

import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.TransactionType;

import java.io.Serializable;
import java.math.BigDecimal;

public class TransactionDTO extends VyperDTO implements Serializable {
    private Long id;
    private BigDecimal amount;
    private String description;
    private AccountDTO accountDTO;
    private Long categoryId;
    private TransactionType transactionType;

    public TransactionDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public AccountDTO getAccountDTO() {
        return accountDTO;
    }

    public void setAccountDTO(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }
}
