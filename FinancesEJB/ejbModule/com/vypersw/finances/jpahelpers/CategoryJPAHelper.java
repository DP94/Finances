package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Category;

import javax.persistence.EntityManager;

public class CategoryJPAHelper extends JPAHelper<Category> {
    public CategoryJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }
}
