package com.vypersw.finances.client.lists.account;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.dto.user.AccountDTO;

interface AccountManagementListUiHandlers extends UiHandlers {
    void onEditPressed(Long accountId);
    void refresh();
    void onCreate();
    void delete(AccountDTO accountDTO);
}