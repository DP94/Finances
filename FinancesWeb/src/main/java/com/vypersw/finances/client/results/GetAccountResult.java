package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.user.AccountDTO;

public class GetAccountResult extends VyperActionResult {
    private AccountDTO accountDTO;

    public GetAccountResult() {
    }

    public GetAccountResult(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }

    public void setAccountDTO(AccountDTO accountDTO) {
        this.accountDTO = accountDTO;
    }

    public AccountDTO getAccountDTO() {
        return accountDTO;
    }
}
