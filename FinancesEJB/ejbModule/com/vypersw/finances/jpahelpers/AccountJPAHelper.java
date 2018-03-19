package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Account;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class AccountJPAHelper extends JPAHelper<Account> {
    public AccountJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }

    public Long getNextAccountId() {
        TypedQuery<Long> typedQuery = entityManager.createQuery("SELECT MAX(account.accountId) FROM Account account", Long.class);
        return typedQuery.getSingleResult() + 1;
    }
}
