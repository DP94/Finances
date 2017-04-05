package com.vypersw.finances.server.actionhandlers;

import java.util.ArrayList;
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.results.GetCurrenciesActionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.CurrencyService;

public class GetCurrenciesActionHandler extends VyperActionHandler<GetCurrenciesAction, GetCurrenciesActionResult>{
	
	private CurrencyService service = LocalEJBServiceLocator.getInstance().getCurrencyService();
	
	@Override
	protected GetCurrenciesActionResult executeAction(GetCurrenciesAction action) {
		ArrayList<String> currencies = service.getAllCurrencies();
		GetCurrenciesActionResult result = new GetCurrenciesActionResult();
		result.setCurrencies(currencies);
		return result;
	}


}
