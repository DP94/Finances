package com.vypersw.finances.client.usermanagement.usermanagementform;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class UserManagementFormView extends ViewWithUiHandlers<UserManagementFormUiHandlers> implements UserManagementFormPresenter.MyView {
    interface Binder extends UiBinder<Widget, UserManagementFormView> {
    }

    @UiField
    HTMLPanel main;

    @Inject
    public UserManagementFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }
    
}