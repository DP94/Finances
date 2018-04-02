package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Account;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

public class AccountJPAHelper extends JPAHelper<Account> {
    public AccountJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }

    public Long getNextAccountId() {
        TypedQuery<Long> typedQuery = entityManager.createQuery("SELECT MAX(account.accountId) FROM Account account", Long.class);
        return typedQuery.getSingleResult() + 1;
    }

    public List<Account> findAll() {
        TypedQuery<Account> typedQuery = entityManager.createQuery("SELECT account FROM Account account LEFT JOIN account.accountPermissions accountPermission " +
                "WHERE accountPermission.user.id = :userId " +
                "AND accountPermission.permission = 1 " , Account.class);
        typedQuery.setParameter("userId", 2L);
        return typedQuery.getResultList();
    }
}
