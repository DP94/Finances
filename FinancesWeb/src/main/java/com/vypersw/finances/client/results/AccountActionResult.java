package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.user.AccountDTO;

import java.util.ArrayList;

public class AccountActionResult extends VyperActionResult {
    private AccountDTO accountDTO;
    private ArrayList<AccountDTO> accounts;

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

    public ArrayList<AccountDTO> getAccounts() {
        return accounts;
    }

    public void setAccounts(ArrayList<AccountDTO> accounts) {
        this.accounts = accounts;
    }
}
