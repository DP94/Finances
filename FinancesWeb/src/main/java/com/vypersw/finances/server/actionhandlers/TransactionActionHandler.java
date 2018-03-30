package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.TransactionAction;
import com.vypersw.finances.client.results.TransactionResult;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.TransactionService;

public class TransactionActionHandler extends VyperActionHandler<TransactionAction, TransactionResult> {

    private TransactionService transactionService = LocalEJBServiceLocator.getInstance().getTransactionService();

    @Override
    protected TransactionResult executeAction(TransactionAction action) {
        if (action.isSave()) {
            transactionService.save(action.getTransactionDTO());
        } else if (action.isGet()) {
            TransactionDTO transactionDTO = transactionService.findById(action.getId());
            TransactionResult transactionResult = new TransactionResult();
            transactionResult.setTransactionDTO(transactionDTO);
            return  transactionResult;
        }
        return new TransactionResult();
    }
}
