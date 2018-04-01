package com.vypersw.finances.client.transaction;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import com.vypersw.finances.client.abstractpresenter.FormState;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.*;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.*;
import com.vypersw.finances.client.widget.MoveEvent;
import com.vypersw.finances.dto.CategoryDTO;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;
import java.util.List;

public class TransactionFormPresenter extends VyperFormPresenter<TransactionFormPresenter.MyView, TransactionDTO> implements TransactionFormUiHandlers, MoveEvent.MoveEventHandler {

    public interface MyView extends View, HasUiHandlers<TransactionFormUiHandlers> {
        void setViewData(List<AccountDTO> accountDTOList);

        void clearView();

        void buildCategoriesTree(List<CategoryDTO> categoryDTOSet);

        void buildTransactionData(TransactionDTO transactionDTO);
    }

    private long transactionId;

    @Inject
    public TransactionFormPresenter(EventBus eventBus, DispatchAsync dispatchAsync, MyView view, ApplicationPresenter container) {
        super(eventBus, dispatchAsync, view, container);
        getView().setUiHandlers(this);
    }

    @Override
    public void save() {
        setLoading(true);
        TransactionAction accountAction = new TransactionAction(getData());
        accountAction.setSave(true);
        dispatchAsync.execute(accountAction, new AsyncCallback<TransactionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().getContainer().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(TransactionResult result) {
                setLoading(false);
                getContentContainerPresenter().getContainer().success("Transaction created successfully");
                if (getFormState() == FormState.CREATE) {
                    getView().clearView();
                } else {
                    getView().buildTransactionData(result.getTransactionDTO());
                }
            }
        });
    }

    @Override
    public void refresh() {
        setLoading(true);
        getView().clearView();
        setLoading(false);
    }

    @Override
    public void setFormData(TransactionDTO data) {

    }

    @Override
    public void initaliseForm() {
        setLoading(false);
        AccountAction accountAction = new AccountAction();
        accountAction.setActionType(VyperAction.ActionType.GET_ALL);
        dispatchAsync.execute(accountAction, new AsyncCallback<AccountActionResult>() {
            @Override
            public void onFailure(Throwable caught) {
                getContentContainerPresenter().getContainer().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(AccountActionResult result) {
                getView().setViewData(result.getAccounts());
            }
        });
        initTree();
        if (transactionId != 0) {
            TransactionAction transactionAction = new TransactionAction();
            transactionAction.setGet(true);
            transactionAction.setId(transactionId);
            dispatchAsync.execute(transactionAction, new AsyncCallback<TransactionResult>() {
                @Override
                public void onFailure(Throwable throwable) {
                    setLoading(false);
                    getContentContainerPresenter().getContainer().warn(throwable.getMessage());
                }

                @Override
                public void onSuccess(TransactionResult transactionResult) {
                    setLoading(false);
                    setData(transactionResult.getTransactionDTO());
                    getView().buildTransactionData(transactionResult.getTransactionDTO());
                }
            });
        } else {
            setFormState(FormState.CREATE);
            setData(new TransactionDTO());
        }
    }

    @Override
    public TransactionDTO getData() {
        return super.getData();
    }

    @Override
    public void categoryChange(CategoryDTO categoryDTO, boolean isCreate) {
        setLoading(true);
        if (isCreate) {
            CategoryAction categoryAction = new CategoryAction();
            categoryAction.setCreate(true);
            categoryAction.setCategoryDTO(categoryDTO);
            dispatchAsync.execute(categoryAction, new AsyncCallback<CategoryResult>() {
                @Override
                public void onFailure(Throwable throwable) {
                    setLoading(false);
                    getContainer().warn(throwable.getMessage());
                }

                @Override
                public void onSuccess(CategoryResult categoryResult) {
                    setLoading(false);
                    initTree();
                }
            });
        } else {
            DeleteAction deleteAction = new DeleteAction();
            deleteAction.setDto(categoryDTO);
            dispatchAsync.execute(deleteAction, new AsyncCallback<DeleteResult>() {
                @Override
                public void onFailure(Throwable throwable) {
                    setLoading(false);
                    getContainer().warn(throwable.getMessage());
                }

                @Override
                public void onSuccess(DeleteResult deleteResult) {
                    setLoading(false);
                    initTree();
                }
            });
        }
    }

    @Override
    public void onMove(MoveEvent event) {
        PlaceRequest placeRequest = event.getPlaceRequest();
        transactionId = Long.valueOf(placeRequest.getParameter("id", "0"));
        initaliseForm();
    }

    private void initTree() {
        dispatchAsync.execute(new GetCategoriesAction(), new AsyncCallback<GetCategoriesResult>() {
            @Override
            public void onFailure(Throwable caught) {
                setLoading(false);
                getContentContainerPresenter().getContainer().warn(caught.getMessage());
            }

            @Override
            public void onSuccess(GetCategoriesResult result) {
                setLoading(false);
                getView().buildCategoriesTree(result.getCategoryDTOS());
            }
        });
    }
}
