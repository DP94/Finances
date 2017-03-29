package com.vypersw.finances.server.actionhandlers;

import java.util.ArrayList;

import com.gwtplatform.dispatch.rpc.server.ExecutionContext;
import com.gwtplatform.dispatch.rpc.server.actionhandler.ActionHandler;
import com.gwtplatform.dispatch.shared.ActionException;
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.results.CurrenciesActionResult;
import com.vypersw.finances.client.results.LoginActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.LoginService;

public class GetCurrenciesActionHandler implements ActionHandler<GetCurrenciesAction, CurrenciesActionResult> {
	
	
	@Override
	public CurrenciesActionResult execute(GetCurrenciesAction action, ExecutionContext context) throws ActionException {
		ArrayList<String> currencies = new ArrayList<String>();
		currencies.add("GBP");
		currencies.add("EUR");
		currencies.add("USD");
		CurrenciesActionResult result = new CurrenciesActionResult();
		result.setCurrencies(currencies);
		return result;
	}

	@Override
	public Class<GetCurrenciesAction> getActionType() {
		return null;
	}

	@Override
	public void undo(GetCurrenciesAction arg0, CurrenciesActionResult arg1, ExecutionContext arg2) throws ActionException {	
	}


}
