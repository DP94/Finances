package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.AccountPermission;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class AccountPermissionJPAHelper extends JPAHelper<AccountPermission> {
    public AccountPermissionJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }

    public Long getNextPermissionId() {
        TypedQuery<Long> typedQuery = entityManager.createQuery("SELECT MAX(accountPermission.id) FROM AccountPermission accountPermission", Long.class);
        return typedQuery.getSingleResult() + 1;
    }
}
