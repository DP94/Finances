package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Account;

import javax.persistence.EntityManager;

public class AccountJPAHelper extends JPAHelper<Account> {
    public AccountJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }
}
