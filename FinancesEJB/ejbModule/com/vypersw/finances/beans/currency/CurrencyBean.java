package com.vypersw.finances.beans.currency;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.Query;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.services.CurrencyService;

@Stateless
@Local(CurrencyService.class)
public class CurrencyBean extends AbstractBean implements CurrencyService {

	@Override
	public List<String> getAllCurrencies() {
		List<String> currencies = new ArrayList<>();
		Query query = entityManager.createQuery("SELECT c.currencyCode FROM Currency c");
		currencies = (List<String>) query.getResultList();
		return currencies;
	}

}
