package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Transaction;

import javax.persistence.EntityManager;

public class TransactionJPAHelper extends JPAHelper<Transaction> {
    protected TransactionJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }
}
