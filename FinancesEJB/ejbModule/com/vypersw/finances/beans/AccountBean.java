package com.vypersw.finances.beans;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.account.Account;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;
import com.vypersw.finances.jpahelpers.AccountJPAHelper;
import com.vypersw.finances.services.AccountService;

import javax.ejb.Local;
import javax.ejb.Stateless;

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
        return dto;
    }
}
