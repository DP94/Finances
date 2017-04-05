package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.LoginActionResult;

public class LoginAction extends VyperAction<LoginActionResult> {

	private static final long serialVersionUID = 1L;
	private String username, password;
	
	public LoginAction() {
		
	}

	public LoginAction(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
