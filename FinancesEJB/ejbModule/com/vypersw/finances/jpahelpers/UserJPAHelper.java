package com.vypersw.finances.jpahelpers;

import com.vypersw.finances.user.User;

import javax.persistence.EntityManager;

public class UserJPAHelper extends JPAHelper<User> {
    public UserJPAHelper(EntityManager entityManager) {
        super(entityManager);
    }
}
