package com.vypersw.finances.beans;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.account.Account;
import com.vypersw.finances.account.Category;
import com.vypersw.finances.account.Transaction;
import com.vypersw.finances.dto.CategoryDTO;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;
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
        if (transactionDTO.getId() == null || transactionDTO.getId() == 0) {
            transaction.setId(transactionJPAHelper.getNextTransactionId());
        } else {
            transaction.setId(transactionDTO.getId());
        }

        entityManager.merge(transaction);
        return transaction.getId();
    }

    @Override
    public void delete(long id) {
        TransactionJPAHelper transactionJPAHelper = new TransactionJPAHelper(entityManager);
        Transaction transaction  = transactionJPAHelper.findById(Transaction.class, id);
        transactionJPAHelper.delete(transaction);
    }

    @Override
    public TransactionDTO findById(long id) {
        TransactionJPAHelper transactionJPAHelper = new TransactionJPAHelper(entityManager);
        Transaction transaction = transactionJPAHelper.findById(Transaction.class, id);
        TransactionDTO transactionDTO = new TransactionDTO();

        AccountDTO dto = new AccountDTO();
        dto.setAccountId(transaction.getAccount().getAccountId());
        dto.setName(transaction.getAccount().getName());
        dto.setDescription(transaction.getAccount().getDescription());
        dto.setBalance(transaction.getAccount().getBalance());
        dto.setAccountType(AccountType.forValue(transaction.getAccount().getAccountType()));
        dto.setAccountBalanceTarget(transaction.getAccount().getAccountBalanceTarget());
        dto.setUserId(transaction.getAccount().getUser().getUserId());

        transactionDTO.setId(transaction.getId());
        transactionDTO.setAmount(transaction.getAmount());
        transactionDTO.setCategoryId(transaction.getCategory().getId());
        transactionDTO.setDescription(transaction.getDescription());
        transactionDTO.setTransactionType(TransactionType.forValue(transaction.getTransactionType()));
        transactionDTO.setAccountDTO(dto);
        transactionDTO.setDate(transaction.getDate());
        dto.getTransactions().add(transactionDTO);
        transactionDTO.setCategoryDTO(getCategoryDTO(transaction.getCategory()));
        return transactionDTO;
    }

    private CategoryDTO getCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        if (category.getParentCategory() != null) {
            categoryDTO.setParentCategory(category.getParentCategory().getId());
        }

        for (Category child : category.getChildCategories()) {
            categoryDTO.getChildCategories().add(getCategoryDTO(child));
        }
        return categoryDTO;
    }
}
