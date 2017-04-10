package com.vypersw.finances.beans.currency;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.Query;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.dto.currency.CurrencyDTO;
import com.vypersw.finances.services.CurrencyService;
import com.vypersw.finances.user.Currency;

@Stateless
@Local(CurrencyService.class)
public class CurrencyBean extends AbstractBean implements CurrencyService {

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<CurrencyDTO> getAllCurrencies() {
		ArrayList<CurrencyDTO> currencies = new ArrayList<>();
		Query query = entityManager.createQuery("SELECT c FROM Currency c");
		for (Currency c : (List<Currency>) query.getResultList()) {
			CurrencyDTO dto = new CurrencyDTO();
			dto.setCurrencyId(c.getCurrencyId());
			dto.setCurrencyCode(c.getCurrencyCode());
			currencies.add(dto);
		}
		return currencies;
	}

}
