package com.vypersw.finances.client.usermanagement.usermanagementform;

import java.util.List;

import javax.inject.Inject;

import com.github.gwtbootstrap.client.ui.ListBox;
import com.github.gwtbootstrap.client.ui.PasswordTextBox;
import com.github.gwtbootstrap.client.ui.TextBox;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
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
    TextBox userName;
    
    @UiField
    TextBox emailAddress;
    
    @UiField
    PasswordTextBox password;
    
    @UiField
    ListBox currency;
    
    

    @Inject
    public UserManagementFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        
        password.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				
			}
		});
    }

	@Override
	public void setCurrencyOptions(List<String> options) {
		currency.clear();
		for(String s : options) {
			currency.addItem(s);
		}
	}
    
}