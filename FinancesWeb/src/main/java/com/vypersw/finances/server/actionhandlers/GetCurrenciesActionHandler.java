package com.vypersw.finances.server.actionhandlers;

import java.util.ArrayList;
import com.gwtplatform.dispatch.rpc.server.ExecutionContext;
import com.gwtplatform.dispatch.rpc.server.actionhandler.ActionHandler;
import com.gwtplatform.dispatch.shared.ActionException;
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.results.CurrenciesActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.CurrencyService;

public class GetCurrenciesActionHandler implements ActionHandler<GetCurrenciesAction, CurrenciesActionResult> {
	
	private CurrencyService service = LocalEJBServiceLocator.getInstance().getCurrencyService();
	
	@Override
	public CurrenciesActionResult execute(GetCurrenciesAction action, ExecutionContext context) throws ActionException {
		ArrayList<String> currencies = service.getAllCurrencies();
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
