package com.vypersw.finances.client.transaction;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.TransactionType;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.TextBox;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.util.List;

public class TransactionFormView extends ViewWithUiHandlers<TransactionFormUiHandlers> implements TransactionFormPresenter.MyView, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {

    interface Binder extends UiBinder<Widget, TransactionFormView> {
    }

    @UiField
    ListBox account;

    @UiField
    ListBox transactionType;

    @UiField
    TextBox amount;

    @UiField
    TextBox description;

    @UiField
    Toolbar toolbar;

    @Inject
    public TransactionFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        account.addChangeHandler(changeEvent -> {
            AccountDTO accountDTO = new AccountDTO();
            accountDTO.setAccountId(Long.valueOf(account.getSelectedValue()));
            getUiHandlers().getData().setAccountDTO(accountDTO);
        });
        transactionType.addChangeHandler(changeEvent -> getUiHandlers().getData().setTransactionType(TransactionType.valueOf(transactionType.getSelectedValue())));
        amount.addValueChangeHandler(valueChangeHandler -> getUiHandlers().getData().setAmount(new BigDecimal(amount.getValue())));
        description.addValueChangeHandler(event -> getUiHandlers().getData().setDescription(description.getValue()));
        toolbar.addToolbarButtonClickedHandler(this);
    }

    @Override
    public void setViewData(List<AccountDTO> accountDTOList) {
        account.addItem("", "0");
        for (AccountDTO accountDTO : accountDTOList) {
            account.addItem(accountDTO.getName(), String.valueOf(accountDTO.getAccountId()));
        }
        for (TransactionType type : TransactionType.values()) {
            transactionType.addItem(type.name());
        }
        toolbar.getCreate().removeFromParent();
    }

    @Override
    public void clearView() {
        amount.setText("");
        description.setText("");
        account.setSelectedIndex(0);
        transactionType.setSelectedIndex(0);
    }

    @Override
    public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
        if (event.getEventType() == ToolbarButtonClickedEvent.ToolbarEventType.SAVE) {
            getUiHandlers().save();
        } else {
            getUiHandlers().refresh();
        }
    }
}