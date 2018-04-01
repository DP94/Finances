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
import com.vypersw.finances.jpahelpers.TransactionJPAHelper;
import com.vypersw.finances.jpahelpers.UserJPAHelper;
import com.vypersw.finances.services.AccountService;
import com.vypersw.finances.user.User;

import javax.ejb.Local;
import javax.ejb.Stateless;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@Stateless
@Local(AccountService.class)
public class AccountBean extends AbstractBean implements AccountService {

    @Override
    public AccountDTO getById(long id) {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);
        Account account = accountJPAHelper.findById(Account.class, id);
        AccountDTO dto = new AccountDTO();
        dto.setAccountId(account.getAccountId());
        dto.setName(account.getName());
        dto.setDescription(account.getDescription());
        dto.setBalance(account.getBalance());
        dto.setAccountType(AccountType.forValue(account.getAccountType()));
        dto.setAccountBalanceTarget(account.getAccountBalanceTarget());
        dto.setUserId(account.getUser().getUserId());

        for (Transaction transaction : account.getTransactions()) {
            TransactionDTO transactionDTO = new TransactionDTO();
            transactionDTO.setId(transaction.getId());
            transactionDTO.setAmount(transaction.getAmount());
            if (transaction.getCategory() != null) {
                transactionDTO.setCategoryId(transaction.getCategory().getId());
                transactionDTO.setCategoryDTO(getCategoryDTO(transaction.getCategory()));
            }
            transactionDTO.setDescription(transaction.getDescription());
            transactionDTO.setTransactionType(TransactionType.forValue(transaction.getTransactionType()));
            transactionDTO.setAccountDTO(dto);
            transactionDTO.setDate(transaction.getDate());
            dto.getTransactions().add(transactionDTO);
        }
        return dto;
    }

    @Override
    public List<AccountDTO> getAll() {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);
        List<Account> accounts = accountJPAHelper.getAll(Account.class);
        List<AccountDTO> accountDTOS = new ArrayList<>();
        for (Account account : accounts) {
            AccountDTO dto = new AccountDTO();
            dto.setAccountId(account.getAccountId());
            dto.setName(account.getName());
            dto.setDescription(account.getDescription());
            dto.setBalance(account.getBalance());
            dto.setAccountType(AccountType.forValue(account.getAccountType()));
            dto.setAccountBalanceTarget(account.getAccountBalanceTarget());
            dto.setUserId(account.getUser().getUserId());
            accountDTOS.add(dto);

            for (Transaction transaction : account.getTransactions()) {
                TransactionDTO transactionDTO = new TransactionDTO();
                transactionDTO.setId(transaction.getId());
                transactionDTO.setAmount(transaction.getAmount());
                if (transaction.getCategory() != null) {
                    transactionDTO.setCategoryId(transaction.getCategory().getId());
                }
                transactionDTO.setDescription(transaction.getDescription());
                transactionDTO.setTransactionType(TransactionType.forValue(transaction.getTransactionType()));
                transactionDTO.setAccountDTO(dto);
                transactionDTO.setDate(transaction.getDate());
                dto.getTransactions().add(transactionDTO);
                if (transaction.getCategory() != null) {
                    transactionDTO.setCategoryDTO(getCategoryDTO(transaction.getCategory()));
                }
            }
            dto.getTransactions().sort(Comparator.comparing(TransactionDTO::getDate));
        }
        return accountDTOS;
    }

    @Override
    public long updateAccount(AccountDTO accountDTO) {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);

        Account account = accountJPAHelper.findById(Account.class, accountDTO.getAccountId());
        account.setAccountId(accountDTO.getAccountId());
        account.setName(accountDTO.getName());
        account.setAccountBalanceTarget(accountDTO.getAccountBalanceTarget());
        account.setAccountType(accountDTO.getAccountType().getValue());
        account.setBalance(accountDTO.getBalance());
        account.setDescription(accountDTO.getDescription());
        UserJPAHelper userJPAHelper = new UserJPAHelper(entityManager);
        User user = userJPAHelper.findById(User.class, accountDTO.getUserId());
        account.setUser(user);
        entityManager.merge(account);
        return account.getAccountId();
    }

    @Override
    public long create(AccountDTO accountDTO) {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);

        Account account = new Account();
        account.setAccountId(accountJPAHelper.getNextAccountId());
        account.setName(accountDTO.getName());
        account.setAccountBalanceTarget(accountDTO.getAccountBalanceTarget());
        account.setAccountType(accountDTO.getAccountType().getValue());
        account.setBalance(accountDTO.getBalance());
        account.setDescription(accountDTO.getDescription());
        UserJPAHelper userJPAHelper = new UserJPAHelper(entityManager);
        User user = userJPAHelper.findById(User.class, accountDTO.getUserId());
        account.setUser(user);

        entityManager.persist(account);
        return account.getAccountId();
    }

    @Override
    public void delete(long id) {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);
        Account account = accountJPAHelper.findById(Account.class, id);
        accountJPAHelper.delete(account);
    }

    @Override
    public void transfer(long source, long target, long amount) {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);
        Account s = accountJPAHelper.findById(Account.class, source);
        Account t = accountJPAHelper.findById(Account.class, target);
        s.setBalance(s.getBalance().subtract(new BigDecimal(amount)));
        t.setBalance(t.getBalance().add(new BigDecimal(amount)));
        entityManager.merge(s);
        entityManager.merge(t);
        entityManager.persist(createTransaction(TransactionType.EXPENSE, s, t, amount, true));
        entityManager.persist(createTransaction(TransactionType.INCOME, s, t, amount, false));
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

    private Transaction createTransaction(TransactionType transactionType, Account s, Account t, long amount, boolean source) {
        TransactionJPAHelper transactionJPAHelper = new TransactionJPAHelper(entityManager);
        Transaction transaction = new Transaction();
        transaction.setId(transactionJPAHelper.getNextTransactionId());
        if (source) {
            transaction.setAccount(s);
            transaction.setAmount(new BigDecimal(-amount));
        } else {
            transaction.setAccount(t);
            transaction.setAmount(new BigDecimal(amount));
        }
        transaction.setDate(new Date());
        transaction.setDescription("Transfer from " + s.getName() + " to " + t.getName());
        transaction.setCategory(null);
        transaction.setTransactionType(transactionType.getValue());
        return transaction;
    }
}
