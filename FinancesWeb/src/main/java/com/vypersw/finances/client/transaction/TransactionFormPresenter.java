package com.vypersw.finances.client.transaction;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.AccountAction;
import com.vypersw.finances.client.actions.GetCategoriesAction;
import com.vypersw.finances.client.actions.TransactionAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.AccountActionResult;
import com.vypersw.finances.client.results.GetCategoriesResult;
import com.vypersw.finances.client.results.TransactionResult;
import com.vypersw.finances.dto.CategoryDTO;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;
import java.util.List;

public class TransactionFormPresenter extends VyperFormPresenter<TransactionFormPresenter.MyView, TransactionDTO> implements TransactionFormUiHandlers {

    public interface MyView extends View, HasUiHandlers<TransactionFormUiHandlers> {
        void setViewData(List<AccountDTO> accountDTOList);

        void clearView();

        void buildCategoriesTree(List<CategoryDTO> categoryDTOSet);
    }

    @Inject
    public TransactionFormPresenter(EventBus eventBus, DispatchAsync dispatchAsync, MyView view, ApplicationPresenter container) {
        super(eventBus, dispatchAsync, view, container);
        getView().setUiHandlers(this);
    }

    @Override
    public void save() {
        setLoading(true);
        TransactionAction accountAction = new TransactionAction(getData());
        dispatchAsync.execute(accountAction, new AsyncCallback<TransactionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(TransactionResult result) {
                setLoading(false);
                getContentContainerPresenter().success("Transaction created successfully");
                getView().clearView();
            }
        });
    }

    @Override
    public void refresh() {
        getView().clearView();
    }

    @Override
    public void setFormData(TransactionDTO data) {

    }

    @Override
    public void initaliseForm() {

    }

    @Override
    protected void onBind() {
        super.onBind();
        setData(new TransactionDTO());
        AccountAction accountAction = new AccountAction();
        accountAction.setGetAll(true);
        dispatchAsync.execute(accountAction, new AsyncCallback<AccountActionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                getContentContainerPresenter().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(AccountActionResult result) {
                getView().setViewData(result.getAccounts());
            }
        });
        dispatchAsync.execute(new GetCategoriesAction(), new AsyncCallback<GetCategoriesResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(GetCategoriesResult result) {
                setLoading(false);
                getView().buildCategoriesTree(result.getCategoryDTOS());
            }
        });
    }

    @Override
    public TransactionDTO getData() {
        return super.getData();
    }
}
