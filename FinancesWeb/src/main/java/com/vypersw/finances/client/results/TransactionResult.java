package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.TransactionDTO;

public class TransactionResult extends VyperActionResult {
    private TransactionDTO transactionDTO;

    public TransactionResult() {
    }

    public TransactionDTO getTransactionDTO() {
        return transactionDTO;
    }

    public void setTransactionDTO(TransactionDTO transactionDTO) {
        this.transactionDTO = transactionDTO;
    }
}
