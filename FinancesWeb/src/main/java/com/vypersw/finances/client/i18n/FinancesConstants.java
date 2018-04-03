package com.vypersw.finances.client.i18n;

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.ConstantsWithLookup;

public interface FinancesConstants extends ConstantsWithLookup {
	
	FinancesConstants INSTANCE = GWT.create(FinancesConstants.class);

    @DefaultStringValue("Account")
    public String account();

	@DefaultStringValue("Account management")
	public String accountManagement();

    @DefaultStringValue("Account type")
    public String accountType();
	
	@DefaultStringValue("Add expense")
	public String addExpense();
	
	@DefaultStringValue("Add income")
	public String addIncome();

    @DefaultStringValue("Advanced")
    public String advanced();

    @DefaultStringValue("Amount")
    public String amount();

    @DefaultStringValue("Balance")
    public String balance();

    @DefaultStringValue("Category")
    public String category();

	@DefaultStringValue("Create")
	public String create();

    @DefaultStringValue("Date")
    public String date();

    @DefaultStringValue("Delete")
	public String delete();

    @DefaultStringValue("Description")
    public String description();

    @DefaultStringValue("Edit")
	public String edit();
	
	@DefaultStringValue("Email address")
	public String emailAddress();
	
	@DefaultStringValue("Logout")
	public String logout();
	
	@DefaultStringValue("Modify")
	public String modify();

    @DefaultStringValue("Name")
    public String name();
	
	@DefaultStringValue("Password")
	public String password();
	
	@DefaultStringValue("Preferences")
	public String preferences();
	
	@DefaultStringValue("Refresh")
	public String refresh();
	
	@DefaultStringValue("Reports")
	public String reports();
	
	@DefaultStringValue("Save")
	public String save();

	@DefaultStringValue("Source account")
	public String sourceAccount();
	
	@DefaultStringValue("Successfully logged out")
	public String successfullyLoggedOut();

	@DefaultStringValue("Session timed out")
	public String sessionTimeout();

    @DefaultStringValue("Target")
    public String target();

	@DefaultStringValue("Target account")
	public String targetAccount();

    @DefaultStringValue("Transfer")
    public String transfer();

    @DefaultStringValue("Transaction")
    public String transaction();

	@DefaultStringValue("Transactions")
	public String transactions();
	
	@DefaultStringValue("User management")
	public String userManagement();
	
	@DefaultStringValue("Username")
	public String username();
}
