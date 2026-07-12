package com.cognizant.loan.controller;

import com.cognizant.loan.model.LoanDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public LoanDetails getLoanDetails(@PathVariable String number) {
        return new LoanDetails(number, "car", 400000, 3258, 18);
    }
}
