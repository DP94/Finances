package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.lists.VyperListPresenter;
import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.content.ContentType;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.dto.user.AccountDTO;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class AccountManagementListPresenter extends VyperListPresenter<AccountManagementListPresenter.MyView> implements AccountManagementListUiHandlers {
    public interface MyView extends View , HasUiHandlers<AccountManagementListUiHandlers> {
    	void setAccountData(List<AccountDTO> dto);

		Toolbar getToolbar();
    }

	private DispatchAsync dispatchAsync;

	@Inject
	public AccountManagementListPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync, ApplicationPresenter container) {
		super(eventBus, view, container);
		this.dispatchAsync = dispatchAsync;
		getView().setUiHandlers(this);
		getView().getToolbar().getSave().setVisible(false);
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
				getContentContainerPresenter().warn(throwable.getMessage());
			}

			@Override
			public void onSuccess(AccountActionResult accountActionResult) {
				setLoading(false);
				getView().setAccountData(accountActionResult.getAccounts());
			}
		});
	}
}