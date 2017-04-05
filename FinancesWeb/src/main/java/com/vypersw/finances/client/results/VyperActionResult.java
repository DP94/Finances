package com.vypersw.finances.client.results;

import java.io.Serializable;

import com.gwtplatform.dispatch.rpc.shared.SimpleResult;

public abstract class VyperActionResult extends SimpleResult<Void> implements Serializable {
	private static final long serialVersionUID = 1L;

	public VyperActionResult() {
		super(null);
	}

}
