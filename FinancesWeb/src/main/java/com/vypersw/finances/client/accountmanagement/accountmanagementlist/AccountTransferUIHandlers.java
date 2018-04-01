package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.dto.user.AccountDTO;

public interface AccountTransferUIHandlers extends UiHandlers {
    void save(AccountDTO source, AccountDTO target, long amount);
    void refresh();
}
