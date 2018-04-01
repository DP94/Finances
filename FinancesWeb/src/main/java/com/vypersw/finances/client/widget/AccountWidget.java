package com.vypersw.finances.client.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.vypersw.finances.dto.user.AccountDTO;
import org.gwtbootstrap3.client.ui.ProgressBar;

public class AccountWidget extends Composite {

	private static AccountWidget.Binder binder = GWT.create(AccountWidget.Binder.class);

	interface Binder extends UiBinder<Widget, AccountWidget> {
	}

	private AccountDTO accountDTO;

	private String id;

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

	public AccountWidget() {
		initWidget(binder.createAndBindUi(this));
	}

	public AccountWidget(AccountDTO accountDTO) {
		initWidget(binder.createAndBindUi(this));
		init(accountDTO);
	}

	public void init(AccountDTO accountDTO) {
		this.accountDTO = accountDTO;
		progress.setText(String.valueOf(getPercentage()));
		setID(String.valueOf(accountDTO.getAccountId()));
		accountName.setText(accountDTO.getName());
		accountBalance.setText("£" + accountDTO.getBalance().toString());
		animate("progress" + id, getPercentage());
	}

	public AccountDTO getAccountDTO() {
		return accountDTO;
	}

	public void setAccountDTO(AccountDTO accountDTO) {
		this.accountDTO = accountDTO;
	}

	public void setIconType(String glyph) {
		icon.addStyleName(glyph);
	}

	public void setID(String id) {
		this.id = id;
		progress.setId("progress" + id);
	}

	public String getId() {
		return id;
	}

	public double getPercentage() {
		if (accountDTO.getAccountBalanceTarget() != null) {
			return accountDTO.getBalance().doubleValue() / accountDTO.getAccountBalanceTarget().doubleValue() * 100;
		}
		return 0;
	}

	public native void animate(String progressId, double percentage) /*-{
        $wnd.$("#" + progressId).animate({
            width: percentage + '%'
        }, 1250);
    }-*/;
}
