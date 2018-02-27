package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.VyperJPA;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

public abstract class JPAHelper<T extends VyperJPA> {

    protected EntityManager entityManager;

    protected JPAHelper(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<T> getAll(Class<T> type) {
        Query query = entityManager.createQuery("SELECT o FROM " + type.getSimpleName() + " o");
        return query.getResultList();
    }

    public T findById(Class<T> t, Long id) {
        return entityManager.find(t, id);
    }
}
