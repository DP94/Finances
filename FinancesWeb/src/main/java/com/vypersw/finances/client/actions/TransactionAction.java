package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.TransactionResult;
import com.vypersw.finances.dto.TransactionDTO;

public class TransactionAction extends VyperAction<TransactionResult> {
    private TransactionDTO transactionDTO;

    public TransactionAction() {
    }

    public TransactionAction(TransactionDTO transactionDTO) {
        this.transactionDTO = transactionDTO;
    }

    public TransactionDTO getTransactionDTO() {
        return transactionDTO;
    }

    public void setTransactionDTO(TransactionDTO transactionDTO) {
        this.transactionDTO = transactionDTO;
    }
}
