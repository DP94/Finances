package com.vypersw.finances.client.actions;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.vypersw.finances.client.results.CurrenciesActionResult;

public class GetCurrenciesAction extends ActionImpl<CurrenciesActionResult> implements Serializable {
	
	private static final long serialVersionUID = 1L;

	public GetCurrenciesAction() {
		
	}
	
	@Override
	public boolean isSecured() {
		return false;
	}

}
