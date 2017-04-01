package com.vypersw.finances.client.usermanagement.usermanagementform;

import java.util.List;

import javax.inject.Inject;

import org.gwtbootstrap3.client.ui.Input;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.TextBox;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class UserManagementFormView extends ViewWithUiHandlers<UserManagementFormUiHandlers> implements UserManagementFormPresenter.MyView {
    interface Binder extends UiBinder<Widget, UserManagementFormView> {
    }
    
    @UiField
    HTMLPanel main;
    
    @UiField
    TextBox username;
    
    @UiField
    TextBox emailAddress;
    
    @UiField
    Input password;
    
    @UiField
    ListBox currency;
    
    

    @Inject
    public UserManagementFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }

	@Override
	public void setCurrencyOptions(List<String> options) {
		currency.clear();
		for(String s : options) {
			currency.addItem(s);
		}
	}
    
}