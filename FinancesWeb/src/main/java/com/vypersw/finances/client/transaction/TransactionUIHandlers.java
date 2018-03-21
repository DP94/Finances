package com.vypersw.finances.client.transaction;

import com.gwtplatform.mvp.client.UiHandlers;
import com.vypersw.finances.dto.TransactionDTO;

interface TransactionFormUiHandlers extends UiHandlers {
    void save();

    void refresh();

    TransactionDTO getData();
}
