package com.vypersw.finances.client.i18n;

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.LocalizableResource.DefaultLocale;
import com.google.gwt.i18n.client.Messages;
import com.google.gwt.i18n.client.Constants.DefaultStringValue;
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
	
	@DefaultStringValue("Logout")
	public String logout();
	
	@DefaultStringValue("Modify")
	public String modify();
	
	@DefaultStringValue("Preferences")
	public String preferences();
	
	@DefaultStringValue("Reports")
	public String reports();
	
	@DefaultStringValue("Successfully logged out")
	public String successfullyLoggedOut();
	
	@DefaultStringValue("User management")
	public String userManagement();
}
