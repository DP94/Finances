package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
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
        setLoading(true);
        dispatchAsync.execute(new GetAccountAction(accountId), new AsyncCallback<GetAccountResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(GetAccountResult result) {
                setLoading(false);
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
        setLoading(true);
        dispatchAsync.execute(new AccountAction(getData()), new AsyncCallback<AccountActionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                Window.alert(caught.getMessage());
            }

            @Override
            public void onSuccess(AccountActionResult result) {
                setLoading(false);
                setData(result.getAccountDTO());
                getView().setViewData(result.getAccountDTO());
                getContentContainerPresenter().success("Save successful");
            }
        });
    }

    @Override
    public void onRefresh() {
        initaliseForm();
    }
}
