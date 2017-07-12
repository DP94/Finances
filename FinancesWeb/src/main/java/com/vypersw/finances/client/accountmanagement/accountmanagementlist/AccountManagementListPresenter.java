package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import java.util.List;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperListPresenter;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.dto.user.AccountDTO;
import com.gwtplatform.mvp.client.HasUiHandlers;

public class AccountManagementListPresenter extends VyperListPresenter<AccountManagementListPresenter.MyView> implements AccountManagementListUiHandlers {
    public interface MyView extends View , HasUiHandlers<AccountManagementListUiHandlers> {
    	void setAccountData(List<AccountDTO> dto);
    }

	@Inject
	public AccountManagementListPresenter(EventBus eventBus, MyView view, ApplicationPresenter container) {
		super(eventBus, view, container);
		getView().setUiHandlers(this);
		getView().setAccountData(getContainer().getUserDTO().getAccounts());
	}
}