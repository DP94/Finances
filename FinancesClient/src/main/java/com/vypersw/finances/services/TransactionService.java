package com.vypersw.finances.services;

import com.vypersw.finances.dto.TransactionDTO;

public interface TransactionService {
    long save(TransactionDTO transactionDTO);
    void delete(long id);
    TransactionDTO findById(long id);
}
