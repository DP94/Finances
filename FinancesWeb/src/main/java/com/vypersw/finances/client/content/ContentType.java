package com.vypersw.finances.client.content;

public enum ContentType {

    ADD("Add transaction"),
    ACCOUNT_EDITING("Account editing"),
	ACCOUNT_MANAGEMENT("Account management"),
	REPORTS("Reports"),
	USER_SETTINGS("User settings");
	
	private String name;
	
	ContentType(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
}
