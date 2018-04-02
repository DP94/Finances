package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.AccountService;

import java.util.ArrayList;

public class AccountActionHandler extends VyperActionHandler<AccountAction, AccountActionResult> {

    private AccountService accountService = LocalEJBServiceLocator.getInstance().getAccountService();

    @Override
    protected AccountActionResult executeAction(AccountAction action) {
        AccountActionResult accountActionResult = new AccountActionResult();
        switch (action.getActionType()) {
            case SAVE:
                long id = accountService.updateAccount(action.getAccountDTO());
                AccountDTO newAccount = accountService.getById(id);
                accountActionResult.setAccountDTO(newAccount);
                return accountActionResult;
            case CREATE:
                id = accountService.create(action.getAccountDTO());
                AccountDTO newAccountDTO = accountService.getById(id);
                accountActionResult.setAccountDTO(newAccountDTO);
                return accountActionResult;
            case GET_ALL:
                ArrayList<AccountDTO> accountDTOList = new ArrayList<>(accountService.getAll(action.getUserId()));
                accountActionResult.setAccounts(accountDTOList);
                return accountActionResult;
            case ACCOUNT_TRANSFER:
                accountService.transfer(action.getSourceId(), action.getTargetId(), action.getAmount());
                return accountActionResult;
            default:
                return accountActionResult;
        }
    }
}
