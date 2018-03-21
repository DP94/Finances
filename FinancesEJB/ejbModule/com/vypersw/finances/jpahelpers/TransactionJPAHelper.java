package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Transaction;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class TransactionJPAHelper extends JPAHelper<Transaction> {
    public TransactionJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }


    public Long getNextTransactionId() {
        TypedQuery<Long> typedQuery = entityManager.createQuery("SELECT MAX(transaction.id) FROM Transaction transaction", Long.class);
        return typedQuery.getSingleResult() + 1;
    }
}
