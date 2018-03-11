package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.actions.GetAccountAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.client.results.GetAccountResult;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;

public class AccountEditorPresenter extends VyperFormPresenter<AccountEditorPresenter.MyView, AccountDTO> implements AccountEditorUIHandlers {

    public interface MyView extends View, HasUiHandlers<AccountEditorUIHandlers> {
        void setViewData(AccountDTO accountDTO);
    }

    private DispatchAsync dispatchAsync;

    @Inject
    public AccountEditorPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync, ApplicationPresenter container) {
        super(eventBus, view, container);
        this.dispatchAsync = dispatchAsync;
        getView().setUiHandlers(this);
    }

    @Override
    public void setFormData(AccountDTO data) {
        if (data != null) {
            super.setData(data);
            getView().setViewData(data);
        }
    }

    @Override
    public void initaliseForm() {
        dispatchAsync.execute(new GetAccountAction(getContainer().getCurrentAccountId()), new AsyncCallback<GetAccountResult>() {
            @Override
            public void onFailure(Throwable caught) {
                Window.alert(caught.getMessage());
            }

            @Override
            public void onSuccess(GetAccountResult result) {
                setData(result.getAccountDTO());
                getView().setViewData(result.getAccountDTO());
            }
        });
    }

    @Override
    public AccountDTO getData() {
        return super.getData();
    }

    @Override
    public void onSave() {
        dispatchAsync.execute(new AccountAction(getData()), new AsyncCallback<AccountActionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                Window.alert(caught.getMessage());
            }

            @Override
            public void onSuccess(AccountActionResult result) {
                setData(result.getAccountDTO());
            }
        });
    }
}
