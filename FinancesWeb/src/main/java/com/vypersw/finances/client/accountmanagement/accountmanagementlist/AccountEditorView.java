package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.abstractpresenter.FormState;
import com.vypersw.finances.client.i18n.FinancesConstants;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.TabListItem;
import org.gwtbootstrap3.client.ui.TextBox;

import javax.inject.Inject;
import java.math.BigDecimal;

public class AccountEditorView extends ViewWithUiHandlers<AccountEditorUIHandlers> implements AccountEditorPresenter.MyView, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {

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

    @Inject
    public AccountEditorView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        toolbar.addToolbarButtonClickedHandler(this);
        init();
        for (int i = 0; i < AccountType.values().length; i++) {
            AccountType type = AccountType.values()[i];
            accountType.addItem(type.name());
        }
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
    }

    @Override
    public void setFormState(FormState formState) {
        toolbar.getCreate().setVisible(false);
        if (formState == FormState.CREATE) {
            modifyTab.setText(FinancesConstants.INSTANCE.create());
            transactionsTab.setVisible(false);
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
        }
    }


}
