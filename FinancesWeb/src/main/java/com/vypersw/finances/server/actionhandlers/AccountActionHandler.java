package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.AccountService;

import java.util.ArrayList;
import java.util.List;

public class AccountActionHandler extends VyperActionHandler<AccountAction, AccountActionResult> {

    private AccountService accountService = LocalEJBServiceLocator.getInstance().getAccountService();

    @Override
    protected AccountActionResult executeAction(AccountAction action) {
        AccountActionResult accountActionResult = new AccountActionResult();
        if (action.isGetAll()) {
            ArrayList<AccountDTO> accountDTOList = new ArrayList<>(accountService.getAll());
            accountActionResult.setAccounts(accountDTOList);
        } else {
            long id = accountService.updateAccount(action.getAccountDTO());
            AccountDTO newAccount = accountService.getById(id);
            accountActionResult.setAccountDTO(newAccount);
        }
        return accountActionResult;
    }
}
