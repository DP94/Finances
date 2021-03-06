package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.abstractpresenter.FormState;
import com.vypersw.finances.client.i18n.FinancesConstants;
import com.vypersw.finances.client.widget.GridDoubleClickEvent;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.client.widget.VyperDataGrid;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.TabListItem;
import org.gwtbootstrap3.client.ui.TextBox;

import javax.inject.Inject;
import java.math.BigDecimal;

public class AccountEditorView extends ViewWithUiHandlers<AccountEditorUIHandlers> implements AccountEditorPresenter.MyView, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler, GridDoubleClickEvent.GridDoubleClickEventHandler {

    public interface Binder extends UiBinder<Widget, AccountEditorView> {
    }

    @UiField
    TextBox accountName;

    @UiField
    TextBox accountBalance;

    @UiField
    TextBox accountDescription;

    @UiField
    ListBox accountType;

    @UiField
    TextBox accountBalanceTarget;

    @UiField
    Toolbar toolbar;

    @UiField
    TabListItem modifyTab;

    @UiField
    TabListItem transactionsTab;

    @UiField
    VyperDataGrid<TransactionDTO> transactionsGrid;

    private TransactionDataProvider transactionDataProvider = new TransactionDataProvider();

    @Inject
    public AccountEditorView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        toolbar.addToolbarButtonClickedHandler(this);
        init();
        for (int i = 0; i < AccountType.values().length; i++) {
            AccountType type = AccountType.values()[i];
            accountType.addItem(type.name());
        }
        transactionsGrid.setAbstractDataProvider(transactionDataProvider);
        transactionsGrid.addGridDoubleClickEventHandlers(this);
        transactionsGrid.buildTable();
        transactionsGrid.getToolbar().removeFromParent();
    }

    @Override
    public void setViewData(AccountDTO accountDTO) {
        accountName.setText(accountDTO.getName());
        accountBalance.setText(accountDTO.getBalance().toString());
        accountDescription.setText(accountDTO.getDescription());
        if (accountDTO.getAccountBalanceTarget() != null) {
            accountBalanceTarget.setText(accountDTO.getAccountBalanceTarget().toString());
        } else {
            accountBalanceTarget.setText("0");
        }
        for (int i = 0; i < AccountType.values().length; i++) {
            AccountType type = AccountType.values()[i];
            if (type == accountDTO.getAccountType()) {
                accountType.setSelectedIndex(i);
            }
        }
        transactionsTab.addShowHandler(tabShowEvent -> {
            transactionDataProvider.getList().clear();
            for (TransactionDTO transactionDTO : accountDTO.getTransactions()) {
                transactionDataProvider.getList().add(transactionDTO);
            }
            transactionDataProvider.flush();
            transactionsGrid.getPagination().rebuild(transactionsGrid.getSimplePager());
        });
    }

    @Override
    public void setFormState(FormState formState) {
        toolbar.getCreate().setVisible(false);
        if (formState == FormState.CREATE) {
            modifyTab.setText(FinancesConstants.INSTANCE.create());
            transactionsTab.setVisible(false);
            toolbar.getDelete().removeFromParent();
            toolbar.getEdit().removeFromParent();
        } else {
            modifyTab.setText(FinancesConstants.INSTANCE.modify());
            transactionsTab.setVisible(true);
        }
    }

    private void init() {
        accountName.addValueChangeHandler(event -> getUiHandlers().getData().setName(accountName.getValue()));
        accountBalance.addValueChangeHandler(event -> getUiHandlers().getData().setBalance(new BigDecimal(accountBalance.getValue())));
        accountDescription.addValueChangeHandler(event -> getUiHandlers().getData().setDescription(accountDescription.getValue()));
        accountBalanceTarget.addValueChangeHandler(event -> getUiHandlers().getData().setAccountBalanceTarget(new BigDecimal(accountBalanceTarget.getValue())));
        accountType.addChangeHandler(changeEvent -> getUiHandlers().getData().setAccountType(AccountType.valueOf(accountType.getSelectedValue())));
    }

    @Override
    public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
        switch (event.getEventType()) {
            case SAVE:
                getUiHandlers().onSave();
                break;
            case REFRESH:
                getUiHandlers().onRefresh();
                break;
            case DELETE:
                if (transactionsGrid.getSelectedRow() != null) {
                    getUiHandlers().delete(transactionsGrid.getSelectedRow());
                }
                break;
            case EDIT:
                if (transactionsGrid.getSelectedRow() != null) {
                    getUiHandlers().edit(transactionsGrid.getSelectedRow());
                }
        }
    }

    @Override
    public void onGridDoubleClick(GridDoubleClickEvent event) {
        getUiHandlers().edit(((TransactionDTO)event.getCurrentRow()));
    }


}
