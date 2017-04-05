package com.vypersw.finances.server.actionhandlers;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.server.ExecutionContext;
import com.gwtplatform.dispatch.rpc.server.actionhandler.ActionHandler;
import com.gwtplatform.dispatch.shared.ActionException;
import com.vypersw.finances.client.actions.VyperAction;
import com.vypersw.finances.client.results.VyperActionResult;

public abstract class VyperActionHandler<A extends VyperAction<R>, R extends VyperActionResult> implements ActionHandler<A, R>, Serializable {
	private static final long serialVersionUID = 1L;

	@Override
	public R execute(A action, ExecutionContext context) throws ActionException {
		return executeAction(action);
	}
	
	@Override
	public Class<A> getActionType() {
		return null;
	}

	@Override
	public void undo(A action, R result, ExecutionContext context) throws ActionException {
	}
	
	protected abstract R executeAction(A action);
}
