package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.TransactionResult;
import com.vypersw.finances.dto.TransactionDTO;

public class TransactionAction extends VyperAction<TransactionResult> {
    private TransactionDTO transactionDTO;
    private boolean get, isSave;
    private long id;

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

    public boolean isGet() {
        return get;
    }

    public void setGet(boolean get) {
        this.get = get;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isSave() {
        return isSave;
    }

    public void setSave(boolean save) {
        isSave = save;
    }
}
