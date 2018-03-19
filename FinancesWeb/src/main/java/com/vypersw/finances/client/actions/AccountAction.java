package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;

public class AccountAction extends VyperAction<AccountActionResult> {
    private AccountDTO accountDTO;
    private boolean getAll;
    private boolean isCreate;
    public AccountAction() {
    }

    public AccountAction(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }

    public AccountDTO getAccountDTO() {
        return accountDTO;
    }

    public void setAccountDTO(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }

    public boolean isGetAll() {
        return getAll;
    }

    public void setGetAll(boolean getAll) {
        this.getAll = getAll;
    }

    public boolean isCreate() {
        return isCreate;
    }

    public void setCreate(boolean create) {
        isCreate = create;
    }
}
