package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.gwtplatform.mvp.client.UiHandlers;

interface AccountManagementListUiHandlers extends UiHandlers {
    String getCurrencySymbol();

    void onEditPressed(Long accountId);
}