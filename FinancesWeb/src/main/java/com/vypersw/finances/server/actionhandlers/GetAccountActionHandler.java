package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.GetAccountAction;
import com.vypersw.finances.client.results.GetAccountResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.AccountService;

public class GetAccountActionHandler extends VyperActionHandler<GetAccountAction, GetAccountResult> {

    private AccountService service = LocalEJBServiceLocator.getInstance().getAccountService();

    @Override
    protected GetAccountResult executeAction(GetAccountAction action) {
        return new GetAccountResult(service.getById(action.getAccountId()));
    }
}
