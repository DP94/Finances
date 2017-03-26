package com.vypersw.finances.abstractbean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class AbstractBean {
	
	@PersistenceContext(unitName = "FinancesJPA")
	protected EntityManager entityManager;
}
