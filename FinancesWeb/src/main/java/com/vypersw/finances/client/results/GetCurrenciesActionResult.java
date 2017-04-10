package com.vypersw.finances.client.results;

import java.util.ArrayList;
import com.gwtplatform.dispatch.rpc.shared.SimpleResult;
import com.vypersw.finances.dto.currency.CurrencyDTO;

public class GetCurrenciesActionResult extends VyperActionResult {

	private static final long serialVersionUID = 1L;
	
	private ArrayList<CurrencyDTO> currencies;
	
	public ArrayList<CurrencyDTO> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(ArrayList<CurrencyDTO> currencies) {
		this.currencies = currencies;
	}

	
	
}
