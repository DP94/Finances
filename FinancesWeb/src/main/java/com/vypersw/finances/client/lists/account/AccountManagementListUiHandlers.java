package com.vypersw.finances.client.lists.account;

import com.gwtplatform.mvp.client.UiHandlers;

interface AccountManagementListUiHandlers extends UiHandlers {
    void onEditPressed(Long accountId);
    void refresh();
    void onCreate();
}