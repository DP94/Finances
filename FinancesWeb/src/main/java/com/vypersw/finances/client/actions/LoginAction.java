package com.vypersw.finances.client.actions;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.vypersw.finances.client.results.LoginActionResult;

public class LoginAction extends ActionImpl<LoginActionResult> implements Serializable {

	private static final long serialVersionUID = 1L;
	private String username, password;
	
	public LoginAction() {
		super();
	}

	public LoginAction(String username, String password) {
		this.username = username;
		this.password = password;
	}

	@Override
	public boolean isSecured() {
		return false;
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
