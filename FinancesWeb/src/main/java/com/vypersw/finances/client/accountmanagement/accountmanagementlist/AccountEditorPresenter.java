package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import com.vypersw.finances.client.abstractpresenter.FormState;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.actions.GetAccountAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.client.results.GetAccountResult;
import com.vypersw.finances.client.widget.MoveEvent;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;

public class AccountEditorPresenter extends VyperFormPresenter<AccountEditorPresenter.MyView, AccountDTO> implements AccountEditorUIHandlers, MoveEvent.MoveEventHandler {

    private long accountId;

    @Override
    public void onMove(MoveEvent event) {
        PlaceRequest placeRequest = event.getPlaceRequest();
        accountId = Long.valueOf(placeRequest.getParameter("id", "0"));
        initaliseForm();
    }

    public interface MyView extends View, HasUiHandlers<AccountEditorUIHandlers> {
        void setViewData(AccountDTO accountDTO);
        void setFormState(FormState formState);
    }

    @Inject
    public AccountEditorPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync, ApplicationPresenter container) {
        super(eventBus, dispatchAsync, view, container);
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
        if (accountId != 0) {
            setLoading(true);
            setFormState(FormState.MODIFY);
            dispatchAsync.execute(new GetAccountAction(accountId), new AsyncCallback<GetAccountResult>() {
                @Override
                public void onFailure(Throwable caught) {
                    setLoading(false);
                    getContentContainerPresenter().getContainer().warn(caught.getMessage());
                }

                @Override
                public void onSuccess(GetAccountResult result) {
                    setLoading(false);
                    setData(result.getAccountDTO());
                    getView().setViewData(result.getAccountDTO());
                }
            });
        } else {
            setFormState(FormState.CREATE);
            setData(new AccountDTO());
        }
        getView().setFormState(getFormState());
    }

    @Override
    public AccountDTO getData() {
        return super.getData();
    }

    @Override
    public void onSave() {
        setLoading(true);
        AccountAction accountAction = new AccountAction();
        if (accountId == 0) {
            accountAction.setCreate(true);
        }
        AccountDTO accountDTO = getData();
        accountDTO.setUserId(getContainer().getUserDTO().getId());
        accountAction.setAccountDTO(accountDTO);
        dispatchAsync.execute(accountAction, new AsyncCallback<AccountActionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().getContainer().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(AccountActionResult result) {
                setLoading(false);
                setFormState(FormState.MODIFY);
                setData(result.getAccountDTO());
                getView().setViewData(result.getAccountDTO());
                getContentContainerPresenter().getContainer().success("Save successful");
                getView().setFormState(getFormState());
                accountId = result.getAccountDTO().getAccountId();
            }
        });
    }

    @Override
    public void onRefresh() {
        initaliseForm();
    }
}
