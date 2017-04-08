package com.vypersw.finances.client.usermanagement.usermanagementform;

import java.util.List;

import javax.inject.Inject;

import org.gwtbootstrap3.client.ui.FormGroup;
import org.gwtbootstrap3.client.ui.Input;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.TextBox;
import org.gwtbootstrap3.client.ui.constants.ValidationState;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent.ToolbarButtonClickedHandler;

public class UserManagementFormView extends ViewWithUiHandlers<UserManagementFormUiHandlers> implements UserManagementFormPresenter.MyView, ToolbarButtonClickedHandler {
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
    
    @UiField
    Toolbar toolbar;
    
    @UiField
    FormGroup usernameGroup;
    
    @UiField
    FormGroup passwordGroup;
    
    @UiField
    TextBox currentUsername;
    
    @UiField
    TextBox currentEmailAddress;
    
    @UiField
    Input currentPassword;
    
    @UiField
    ListBox currentCurrency;
    
    

    @Inject
    public UserManagementFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        setButtons();
        toolbar.addToolbarButtonClickedHandler(this);
    }
    
    public void setButtons() {
    	toolbar.getRefresh().setVisible(true);
    	toolbar.getSave().setVisible(true);
    }

	@Override
	public void setCurrencyOptions(List<String> options) {
		currency.clear();
		for(String s : options) {
			currency.addItem(s);
		}
	}

	@Override
	public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
		switch (event.getEventType()) {
			case SAVE:
				if(validate()) {
					getUiHandlers().onSave();
				}
				break;
			case REFRESH:
				Window.alert("Refresh pressed");
				break;
		}
	}

	@Override
	public String getUsername() {
		return username.getText();
	}

	@Override
	public String getPassword() {
		return password.getText();
	}
	
	public boolean validate() {
		
		boolean validate = true;
		
		if (username.getText().equals("")) {
			usernameGroup.setValidationState(ValidationState.ERROR);
			validate = false;
		}
		if (password.getText().equals("")) {
			passwordGroup.setValidationState(ValidationState.ERROR);
			validate = false;
		}
		return validate;
	}

	@Override
	public void setCurrentUserName(String name) {
		currentUsername.setText(name);
	}

	@Override
	public void setCurrentPassword(String password) {
		currentPassword.setText(password);
	}

	@Override
	public void setCurrentEmail(String email) {
		currentEmailAddress.setText(email);
	}

	@Override
	public void setCurrentCurrency(String currency) {
		currentCurrency.addItem(currency);
	}
    
}