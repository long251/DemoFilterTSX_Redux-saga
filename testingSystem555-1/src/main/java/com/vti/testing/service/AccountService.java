package com.vti.testing.service;

import com.vti.testing.entity.Account;
import com.vti.testing.form.AccountFilterForm;
import com.vti.testing.repository.IAccountRepository;
import com.vti.testing.specification.AccountSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService implements IAccountService{
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Page<Account> getAllAccounts(Pageable pageable, AccountFilterForm form) {
        //truyền thêm Example trong findAll
        Specification<Account> where = AccountSpecification.buildWhere(form);
        return accountRepository.findAll(where, pageable);
    }

    @Override
    public Account getAccountById(int id) {
        return accountRepository.findById(id).get();
    }

    @Override
    public List<Account> gg() {
        return accountRepository.findAll();
    }
}
