package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.vypersw.finances.client.abstractpresenter.lists.AbstractDataProvider;
import com.vypersw.finances.dto.TransactionDTO;

public class TransactionDataProvider extends AbstractDataProvider<TransactionDTO> {

    static final int TRANSACTION_AMOUNT = 0;
    static final int TRANSACTION_ACCOUNT = 1;
    static final int TRANSACTION_DESCRIPTION = 2;
    static final int TRANSACTION_CATEGORY = 3;
    static final int TRANSACTION_TYPE = 4;

    @Override
    public int getColumnCount() {
        return 5;
    }

    @Override
    public String getValueForColumn(int i) {
        switch (i) {
            case TRANSACTION_AMOUNT:
                return "Transaction amount";
            case TRANSACTION_ACCOUNT:
                return "Account";
            case TRANSACTION_DESCRIPTION:
                return "Transaction description";
            case TRANSACTION_CATEGORY:
                return "Category";
            case TRANSACTION_TYPE:
                return "Type";
            default:
                return "";
        }
    }

    @Override
    public String getStringValue(TransactionDTO transactionDTO, int i) {
        switch (i) {
            case TRANSACTION_AMOUNT:
                return transactionDTO.getAmount().toString();
            case TRANSACTION_ACCOUNT:
                return transactionDTO.getAccountDTO().getName();
            case TRANSACTION_DESCRIPTION:
                return transactionDTO.getDescription();
            case TRANSACTION_CATEGORY:
                return String.valueOf(transactionDTO.getCategoryId());
            case TRANSACTION_TYPE:
                return transactionDTO.getTransactionType().name();
            default:
                return "";
        }
    }
}
