package com.vypersw.finances.client.lists.account;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountDataProvider;
import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.content.ContentType;
import com.vypersw.finances.client.lists.VyperListPresenter;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;

import java.util.Collections;
import java.util.HashMap;

public class AccountManagementListPresenter extends VyperListPresenter<AccountDTO, AccountManagementListUiHandlers, AccountDataProvider> implements AccountManagementListUiHandlers {
	private DispatchAsync dispatchAsync;

	@Inject
    public AccountManagementListPresenter(EventBus eventBus, MyView view, AccountDataProvider dataProvider, DispatchAsync dispatchAsync, ApplicationPresenter container) {
        super(eventBus, view, dataProvider, container);
		this.dispatchAsync = dispatchAsync;
	}

	@Override
	public void onEditPressed(Long accountId) {
		getContainer().move(ContentType.ACCOUNT_EDITING, new HashMap<>(Collections.singletonMap("id", String.valueOf(accountId))));
	}

	@Override
	public void refresh() {
		initTable();
	}

	@Override
	public void onCreate() {
		getContainer().move(ContentType.ACCOUNT_EDITING, null);
	}

	@Override
    protected void onReveal() {
		initTable();
    }

    private void initTable() {
		setLoading(true);
		AccountAction accountAction = new AccountAction();
		accountAction.setGetAll(true);
		dispatchAsync.execute(accountAction, new AsyncCallback<AccountActionResult>() {
			@Override
			public void onFailure(Throwable throwable) {
				setLoading(false);
                getContentContainerPresenter().getContainer().warn(throwable.getMessage());
			}

			@Override
			public void onSuccess(AccountActionResult accountActionResult) {
				setLoading(false);
                getView().setTableData(accountActionResult.getAccounts());
			}
		});
	}
}