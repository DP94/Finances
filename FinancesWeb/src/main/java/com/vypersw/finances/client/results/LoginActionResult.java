package com.vypersw.finances.client.results;

import com.gwtplatform.dispatch.rpc.shared.SimpleResult;

public class LoginActionResult extends SimpleResult<Void> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private boolean success;
	
	public LoginActionResult() {
		super(null);
	}
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
}
