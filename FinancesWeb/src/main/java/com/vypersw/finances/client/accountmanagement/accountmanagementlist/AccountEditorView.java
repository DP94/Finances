package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.dto.user.AccountDTO;
import org.gwtbootstrap3.client.ui.TextBox;

import javax.inject.Inject;

public class AccountEditorView extends ViewWithUiHandlers<AccountEditorUIHandlers> implements AccountEditorPresenter.MyView {


    @UiField
    TextBox accountName;

    @Override
    public void setViewData(AccountDTO accountDTO) {
        accountName.setText(accountDTO.getName());
    }

    public interface Binder extends UiBinder<Widget, AccountEditorView> {

    }

    @Inject
    public AccountEditorView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }

}
