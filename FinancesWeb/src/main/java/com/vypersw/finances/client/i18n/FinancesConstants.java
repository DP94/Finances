package com.vypersw.finances.client.i18n;

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.ConstantsWithLookup;

public interface FinancesConstants extends ConstantsWithLookup {
	
	FinancesConstants INSTANCE = GWT.create(FinancesConstants.class);
	
	@DefaultStringValue("Account management")
	public String accountManagement();
	
	@DefaultStringValue("Add expense")
	public String addExpense();
	
	@DefaultStringValue("Add income")
	public String addIncome();
	
	@DefaultStringValue("Create")
	public String create();
	
	@DefaultStringValue("Currency")
	public String currency();
	
	@DefaultStringValue("Email address")
	public String emailAddress();
	
	@DefaultStringValue("Logout")
	public String logout();
	
	@DefaultStringValue("Modify")
	public String modify();
	
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
	
	@DefaultStringValue("Successfully logged out")
	public String successfullyLoggedOut();
	
	@DefaultStringValue("User management")
	public String userManagement();
	
	@DefaultStringValue("Username")
	public String username();
	
	@DefaultStringValue("Welcome, ")
	public String welcomeX();
}
