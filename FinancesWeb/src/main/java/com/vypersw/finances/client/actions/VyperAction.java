package com.vypersw.finances.client.actions;

import com.gwtplatform.dispatch.rpc.shared.ActionImpl;
import com.vypersw.finances.client.results.VyperActionResult;

import java.io.Serializable;

public abstract class VyperAction<V extends VyperActionResult> extends ActionImpl<V> implements Serializable {

	private static final long serialVersionUID = 1L;
	private ActionType actionType;

	public enum ActionType {
		CREATE, SAVE, GET, GET_ALL, DELETE, ACCOUNT_TRANSFER;
	}

	public VyperAction() {
		
	}
	
	@Override
	public boolean isSecured() {
		return false;
	}

	public ActionType getActionType() {
		return actionType;
	}

	public void setActionType(ActionType actionType) {
		this.actionType = actionType;
	}
}
