package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.AccountWidget;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountTransferView extends ViewWithUiHandlers<AccountTransferUIHandlers> implements AccountTransferPresenter.MyView {

    interface Binder extends UiBinder<Widget, AccountTransferView> {
    }

    @UiField
    ListBox sourceAccount;

    @UiField
    ListBox targetAccount;

    @UiField
    AccountWidget sourceAccountWidget;

    @UiField
    AccountWidget targetAccountWidget;

    private Map<Long, AccountDTO> accountDTOMap = new HashMap<>();

    @Inject
    public AccountTransferView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        sourceAccount.addChangeHandler(changeEvent -> {
           sourceAccountWidget.init(accountDTOMap.get(Long.valueOf(sourceAccount.getSelectedIndex())));
        });
        targetAccount.addChangeHandler(changeEvent -> {
           targetAccountWidget.init(accountDTOMap.get(Long.valueOf(targetAccount.getSelectedIndex())));
        });
    }

    @Override
    public void setFormData(List<AccountDTO> accountDTOList) {
        sourceAccount.addItem("", "0");
        targetAccount.addItem("", "0");
        for (AccountDTO accountDTO : accountDTOList) {
            sourceAccount.addItem(accountDTO.getName(), String.valueOf(accountDTO.getAccountId()));
            targetAccount.addItem(accountDTO.getName(), String.valueOf(accountDTO.getAccountId()));
            accountDTOMap.put(accountDTO.getAccountId(), accountDTO);
        }
    }
}
