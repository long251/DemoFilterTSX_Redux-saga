package com.vti.testing.service;

import com.vti.testing.entity.Account;
import com.vti.testing.form.AccountFilterForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IAccountService {
    Page<Account> getAllAccounts(Pageable pageable, AccountFilterForm form);
    Account getAccountById(int id);

    List<Account> gg();
}
