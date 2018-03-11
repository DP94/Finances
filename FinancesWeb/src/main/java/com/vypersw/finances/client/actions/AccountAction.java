package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;

public class AccountAction extends VyperAction<AccountActionResult> {
    private AccountDTO accountDTO;

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
}
