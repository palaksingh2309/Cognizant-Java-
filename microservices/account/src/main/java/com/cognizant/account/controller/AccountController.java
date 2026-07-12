package com.cognizant.account.controller;

import com.cognizant.account.model.AccountDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public AccountDetails getAccountDetails(@PathVariable String number) {
        return new AccountDetails(number, "savings", 234343);
    }
}
