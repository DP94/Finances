package com.vypersw.finances.client.results;

import java.util.List;

import com.gwtplatform.dispatch.rpc.shared.SimpleResult;

public class CreateUserActionResult extends SimpleResult<Void> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private List<String> currencies;
	
	public CreateUserActionResult() {
		super(null);
	}

	public List<String> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(List<String> currencies) {
		this.currencies = currencies;
	}

	
	
}
