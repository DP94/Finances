package com.vypersw.finances.client.results;

import java.util.ArrayList;
import com.gwtplatform.dispatch.rpc.shared.SimpleResult;

public class CurrenciesActionResult extends SimpleResult<Void> {

	private static final long serialVersionUID = 1L;
	
	private ArrayList<String> currencies;
	
	public CurrenciesActionResult() {
		super(null);
	}

	public ArrayList<String> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(ArrayList<String> currencies) {
		this.currencies = currencies;
	}

	
	
}
