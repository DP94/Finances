package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;

public class AccountAction extends VyperAction<AccountActionResult> {
    private AccountDTO accountDTO;
    private long sourceId, targetId, amount;
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

    public long getSourceId() {
        return sourceId;
    }

    public void setSourceId(long sourceId) {
        this.sourceId = sourceId;
    }

    public long getTargetId() {
        return targetId;
    }

    public void setTargetId(long targetId) {
        this.targetId = targetId;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }
}
