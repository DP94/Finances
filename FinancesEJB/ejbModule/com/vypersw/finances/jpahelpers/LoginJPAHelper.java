package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.user.User;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class LoginJPAHelper extends JPAHelper {

    public LoginJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }

    public User getUserByName(String username) {
        Query query = entityManager.createQuery("SELECT u FROM User u WHERE u.username = :name").setParameter("name", username);
        return (User) query.getSingleResult();
    }
}
