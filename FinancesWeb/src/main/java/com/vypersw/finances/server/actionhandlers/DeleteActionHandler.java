package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.DeleteAction;
import com.vypersw.finances.client.results.DeleteResult;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.AccountService;
import com.vypersw.finances.services.TransactionService;

public class DeleteActionHandler extends VyperActionHandler<DeleteAction, DeleteResult> {

    private final TransactionService transactionService = LocalEJBServiceLocator.getInstance().getTransactionService();
    private final AccountService accountService = LocalEJBServiceLocator.getInstance().getAccountService();

    @Override
    protected DeleteResult executeAction(DeleteAction action) {
        if (action.getDto() instanceof TransactionDTO) {
            transactionService.delete(((TransactionDTO) action.getDto()).getId());
        } else if (action.getDto() instanceof AccountDTO) {
            accountService.delete(((AccountDTO) action.getDto()).getAccountId());
        }
        return new DeleteResult();
    }
}
