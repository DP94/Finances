package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.vypersw.finances.client.abstractpresenter.lists.AbstractDataProvider;
import com.vypersw.finances.dto.user.AccountDTO;

public class AccountDataProvider extends AbstractDataProvider<AccountDTO> {

    public static final int ACCOUNT_NAME = 0;
    public static final int ACCOUNT_DESCRIPTION = 1;
    public static final int ACCOUNT_TYPE = 2;

    @Override
    public int getColumnCount() {
        return 3;
    }

    @Override
    public String getValueForColumn(int i) {
        switch (i) {
            case ACCOUNT_NAME:
                return "Account name";
            case ACCOUNT_DESCRIPTION:
                return "Account description";
            case ACCOUNT_TYPE:
                return "Account type";
            default:
                return "";
        }
    }

    @Override
    public String getStringValue(AccountDTO accountDTO, int i) {
        switch (i) {
            case ACCOUNT_NAME:
                return accountDTO.getName();
            case ACCOUNT_DESCRIPTION:
                return accountDTO.getDescription();
            case ACCOUNT_TYPE:
                return accountDTO.getAccountType().name();
            default:
                return "";
        }
    }

    @Override
    public int getColumnType(int i) {
        switch (i) {
            case ACCOUNT_NAME:
            case ACCOUNT_DESCRIPTION:
            case ACCOUNT_TYPE:
            default:
                return STRING;
        }
    }
}
