package com.vypersw.finances.client.results;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.dispatch.rpc.shared.SimpleResult;

public class CurrenciesActionResult extends SimpleResult<Void> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private List<String> currencies;
	
	public CurrenciesActionResult() {
		super(null);
	}

	public List<String> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(List<String> currencies) {
		this.currencies = currencies;
	}

	
	
}
