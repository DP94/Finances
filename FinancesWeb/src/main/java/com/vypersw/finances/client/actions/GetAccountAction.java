package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.GetAccountResult;

public class GetAccountAction extends VyperAction<GetAccountResult> {
    private long accountId;

    public GetAccountAction() {
    }

    public GetAccountAction(long accountId) {
        this.accountId = accountId;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }
}
