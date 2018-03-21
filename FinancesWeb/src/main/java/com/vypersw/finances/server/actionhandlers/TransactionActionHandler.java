package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.TransactionAction;
import com.vypersw.finances.client.results.TransactionResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.TransactionService;

public class TransactionActionHandler extends VyperActionHandler<TransactionAction, TransactionResult> {

    private TransactionService transactionService = LocalEJBServiceLocator.getInstance().getTransactionService();

    @Override
    protected TransactionResult executeAction(TransactionAction action) {
        transactionService.save(action.getTransactionDTO());
        return new TransactionResult();
    }
}
