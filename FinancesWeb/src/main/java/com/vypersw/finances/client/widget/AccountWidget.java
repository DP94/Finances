package com.vypersw.finances.client.widget;

import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;

public abstract class AccountWidget extends Composite {

	protected String id;

	@UiField
	HTMLPanel main;

	public AccountWidget() {
	}

	public abstract void setAccountBalance(String text);

	public abstract void setAccountName(String name);

	public String getID() {
		return id;
	}

	public abstract void setID(String iD);

	public void setVisible(boolean visible) {
		super.setVisible(visible);
	};
}
