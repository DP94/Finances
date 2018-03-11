package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.dto.user.AccountDTO;

interface AccountEditorUIHandlers extends UiHandlers {
    void onSave();

    AccountDTO getData();
}
