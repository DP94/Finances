package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;

interface AccountEditorUIHandlers extends UiHandlers {
    void onSave();
    void onRefresh();
    AccountDTO getData();
    void delete(TransactionDTO transactionDTO);
    void edit(TransactionDTO transactionDTO);
}
