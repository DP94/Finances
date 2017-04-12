package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperListPresenter;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.gwtplatform.mvp.client.HasUiHandlers;

public class AccountManagementListPresenter extends VyperListPresenter<AccountManagementListPresenter.MyView> implements AccountManagementListUiHandlers {
    public interface MyView extends View , HasUiHandlers<AccountManagementListUiHandlers> {
    }

	@Inject
	public AccountManagementListPresenter(EventBus eventBus, MyView view, ApplicationPresenter container) {
		super(eventBus, view, container);
		getView().setUiHandlers(this);
	}
    
}