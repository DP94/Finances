package com.vypersw.finances.services;

import com.vypersw.finances.dto.user.AccountDTO;

import java.util.List;

public interface AccountService {
    AccountDTO getById(long id);
    List<AccountDTO> getAll();
    long updateAccount(AccountDTO accountDTO);
    long create(AccountDTO accountDTO);
}
