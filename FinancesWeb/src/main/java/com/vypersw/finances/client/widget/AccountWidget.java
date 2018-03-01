package com.vypersw.finances.client.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import org.gwtbootstrap3.client.ui.ProgressBar;

public class AccountWidget extends Composite {

	private static AccountWidget.Binder binder = GWT.create(AccountWidget.Binder.class);

	interface Binder extends UiBinder<Widget, AccountWidget> {
	}

	protected String id;

	@UiField
	HTMLPanel main;

	@UiField
	Label accountName;

	@UiField
	Label accountBalance;

	@UiField
	Label icon;

	@UiField
	ProgressBar progress;


	public AccountWidget(double percentage) {
		initWidget(binder.createAndBindUi(this));
		progress.setPercent(percentage);
		progress.setText(String.valueOf(percentage));
		if (percentage == 0) {
			progress.setVisible(false);
		}
	}

	public void setAccountBalance(String text) {
		accountBalance.setText(text);
	}

	public void setAccountName(String name) {
		accountName.setText(name);
	}

	public void setIconType(String glyph) {
		icon.addStyleName(glyph);
	}

	public void setID(String id) {
		this.id = id;
	}
}
