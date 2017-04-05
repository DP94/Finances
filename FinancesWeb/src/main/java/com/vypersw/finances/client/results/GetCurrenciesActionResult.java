package com.vypersw.finances.client.results;

import java.util.ArrayList;
import com.gwtplatform.dispatch.rpc.shared.SimpleResult;

public class GetCurrenciesActionResult extends VyperActionResult {

	private static final long serialVersionUID = 1L;
	
	private ArrayList<String> currencies;
	
	public ArrayList<String> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(ArrayList<String> currencies) {
		this.currencies = currencies;
	}

	
	
}
