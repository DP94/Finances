package com.vypersw.finances.beans;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.account.Account;
import com.vypersw.finances.account.Category;
import com.vypersw.finances.account.Transaction;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.enumeration.TransactionType;
import com.vypersw.finances.jpahelpers.AccountJPAHelper;
import com.vypersw.finances.jpahelpers.CategoryJPAHelper;
import com.vypersw.finances.jpahelpers.TransactionJPAHelper;
import com.vypersw.finances.services.TransactionService;

import javax.ejb.Local;
import javax.ejb.Stateless;
import java.util.Date;

@Stateless
@Local(TransactionService.class)
public class TransactionBean extends AbstractBean implements TransactionService {

    @Override
    public long save(TransactionDTO transactionDTO) {
        TransactionJPAHelper transactionJPAHelper = new TransactionJPAHelper(entityManager);
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);
        Account account = accountJPAHelper.findById(Account.class, transactionDTO.getAccountDTO().getAccountId());

        if (transactionDTO.getTransactionType() == TransactionType.EXPENSE) {
            account.setBalance(account.getBalance().subtract(transactionDTO.getAmount()));
        } else {
            account.setBalance(account.getBalance().add(transactionDTO.getAmount()));
        }

        Transaction transaction = new Transaction();
        transaction.setAccount(account);
        transaction.setAmount(transactionDTO.getAmount());
        CategoryJPAHelper categoryJPAHelper = new CategoryJPAHelper(entityManager);
        Category category = categoryJPAHelper.findById(Category.class, 1L);
        transaction.setCategory(category);
        if (transactionDTO.getDate() == null) {
            transaction.setDate(new Date());
        } else {
            transaction.setDate(transactionDTO.getDate());
        }
        transaction.setDescription(transactionDTO.getDescription());
        transaction.setTransactionType(transactionDTO.getTransactionType().getValue());
        transaction.setId(transactionJPAHelper.getNextTransactionId());
        entityManager.merge(transaction);
        return transaction.getId();
    }
}
