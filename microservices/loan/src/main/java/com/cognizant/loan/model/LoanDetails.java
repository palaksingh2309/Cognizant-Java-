package com.cognizant.loan.model;

public record LoanDetails(String number, String type, int loan, int emi, int tenure) {
}
