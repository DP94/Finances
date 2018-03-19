package com.vypersw.finances.beans;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.account.Account;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;
import com.vypersw.finances.jpahelpers.AccountJPAHelper;
import com.vypersw.finances.jpahelpers.UserJPAHelper;
import com.vypersw.finances.services.AccountService;
import com.vypersw.finances.user.User;

import javax.ejb.Local;
import javax.ejb.Stateless;
import java.util.ArrayList;
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
        }
        return accountDTOS;
    }

    @Override
    public long updateAccount(AccountDTO accountDTO) {
        AccountJPAHelper accountJPAHelper = new AccountJPAHelper(entityManager);

        Account account = new Account();
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
}
