package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.account.Category;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class CategoryJPAHelper extends JPAHelper<Category> {
    public CategoryJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }

    public Long getNextCategoryId() {
        TypedQuery<Long> typedQuery = entityManager.createQuery("SELECT MAX(category.id) FROM Category category", Long.class);
        return typedQuery.getSingleResult() + 1;
    }
}
