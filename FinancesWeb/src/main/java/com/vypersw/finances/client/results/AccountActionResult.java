package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.user.AccountDTO;

public class AccountActionResult extends VyperActionResult {
    private AccountDTO accountDTO;

    public AccountActionResult() {
    }

    public AccountActionResult(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }

    public AccountDTO getAccountDTO() {
        return accountDTO;
    }

    public void setAccountDTO(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }
}
