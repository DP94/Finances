package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.user.Currency;

import javax.persistence.EntityManager;

public class CurrencyJPAHelper extends JPAHelper<Currency> {

    public CurrencyJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }
}
