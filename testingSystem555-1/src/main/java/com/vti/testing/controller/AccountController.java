package com.vti.testing.controller;

import com.vti.testing.dto.AccountDTO;
import com.vti.testing.dto.DepartmentDTO;
import com.vti.testing.entity.Account;
import com.vti.testing.entity.Department;
import com.vti.testing.form.AccountFilterForm;
import com.vti.testing.service.IAccountService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/accounts")
@CrossOrigin("*")
public class AccountController {
@Autowired
    private IAccountService accountService;
@Autowired
    private ModelMapper modelMapper;
@GetMapping
    public Page<AccountDTO> getAllAccount(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "5")int size, AccountFilterForm form){
    Pageable pageable = PageRequest.of(page-1, size);
    Page<Account> accountsPage = accountService.getAllAccounts(pageable, form);
    //do trong Page có 1 cái content để đổ ra list account
    List<Account> accountslist = accountsPage.getContent();
    List<AccountDTO> accountDTOS = modelMapper.map(accountslist, new TypeToken<List<AccountDTO>>(){}.getType());
    return new PageImpl<>(accountDTOS, pageable, accountsPage.getTotalElements());
}
@GetMapping(value="/{id}")
    public AccountDTO getAccountById(@PathVariable(name="id")int id){
    Account account = accountService.getAccountById(id);
    return modelMapper.map(account, AccountDTO.class);
}
    @GetMapping(value = "/gg")
    public  List<Account> gg(){
        return   modelMapper.map(accountService.gg(), new TypeToken<List<AccountDTO>>(){}.getType());
    }
}
