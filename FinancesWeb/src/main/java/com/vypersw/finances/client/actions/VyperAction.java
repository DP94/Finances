package com.vypersw.finances.client.actions;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.vypersw.finances.client.results.VyperActionResult;

public abstract class VyperAction<V extends VyperActionResult> extends ActionImpl<V> implements Serializable {

	private static final long serialVersionUID = 1L;

	public VyperAction() {
		
	}
	
	@Override
	public boolean isSecured() {
		return false;
	}
}
