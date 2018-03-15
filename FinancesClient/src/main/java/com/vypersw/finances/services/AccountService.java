package com.vypersw.finances.services;

import com.vypersw.finances.dto.user.AccountDTO;

public interface AccountService {
    AccountDTO getById(long id);

    long updateAccount(AccountDTO accountDTO);
}
