package com.vypersw.finances.client.usermanagement.usermanagementform;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent.ToolbarButtonClickedHandler;
import com.vypersw.finances.dto.user.UserDTO;
import org.gwtbootstrap3.client.ui.FormGroup;
import org.gwtbootstrap3.client.ui.Input;
import org.gwtbootstrap3.client.ui.TabListItem;
import org.gwtbootstrap3.client.ui.TextBox;
import org.gwtbootstrap3.client.ui.constants.ValidationState;

import javax.inject.Inject;

public class UserManagementFormView extends ViewWithUiHandlers<UserManagementFormUiHandlers> implements UserManagementFormPresenter.MyView, ToolbarButtonClickedHandler {
    interface Binder extends UiBinder<Widget, UserManagementFormView> {
    }
    
    @UiField
    HTMLPanel main;
    @UiField
    TabListItem modifyTab;
    
    @UiField
    TabListItem preferencesTab;
    
    @UiField
    TextBox username;
    
    @UiField
    TextBox emailAddress;
    
    @UiField
    Input password;

    @UiField
    Toolbar toolbar;
    
    @UiField
    FormGroup usernameGroup;
    
    @UiField
    FormGroup passwordGroup;
    

    @Inject
    public UserManagementFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        toolbar.addToolbarButtonClickedHandler(this);
        init();
    }
    
    public void init() {
		username.addValueChangeHandler(event -> getUiHandlers().getData().setUsername(event.getValue()));
		emailAddress.addValueChangeHandler(event -> getUiHandlers().getData().setEmail(event.getValue()));
		password.addValueChangeHandler(event -> getUiHandlers().getData().setPassword(event.getValue()));
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
	public void setViewData(UserDTO dto) {
		username.setText(dto.getUsername());
		password.setText(dto.getPassword());
		emailAddress.setText(dto.getEmail());
	}
}