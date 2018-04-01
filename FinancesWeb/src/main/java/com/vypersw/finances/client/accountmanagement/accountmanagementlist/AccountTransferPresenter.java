package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;
import java.util.List;

public class AccountTransferPresenter extends VyperFormPresenter<AccountTransferPresenter.MyView, AccountDTO> implements AccountTransferUIHandlers {


    public interface MyView extends View, HasUiHandlers<AccountTransferUIHandlers> {
        void setFormData(List<AccountDTO> accountDTOList);
    }

    @Inject
    public AccountTransferPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync, ApplicationPresenter container) {
        super(eventBus, dispatchAsync, view, container);
        getView().setUiHandlers(this);
    }

    @Override
    public void setFormData(AccountDTO data) {

    }

    @Override
    public void initaliseForm() {
        AccountAction accountAction = new AccountAction();
        accountAction.setGetAll(true);
        dispatchAsync.execute(accountAction, new AsyncCallback<AccountActionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().getContainer().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(AccountActionResult result) {
                setLoading(false);
                getView().setFormData(result.getAccounts());
            }
        });
    }

    @Override
    protected void onBind() {
        initaliseForm();
    }
}
