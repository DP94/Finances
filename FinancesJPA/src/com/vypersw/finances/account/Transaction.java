package com.vypersw.finances.account;

import com.vypersw.finances.VyperJPA;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "TBL_TRANSACTION")
public class Transaction implements VyperJPA {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "AMOUNT")
    private BigDecimal amount;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ACCOUNT_ID")
    private Account account;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "CATEGORY_ID")
    private Long categoryId;

    @Column(name = "TRANSACTION_TYPE")
    private Integer transactionType;

    public Transaction() {

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

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(Integer transactionType) {
        this.transactionType = transactionType;
    }
}
