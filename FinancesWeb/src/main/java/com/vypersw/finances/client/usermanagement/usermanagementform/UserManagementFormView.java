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
import com.vypersw.finances.dto.currency.CurrencyDTO;
import com.vypersw.finances.dto.user.UserDTO;
import org.gwtbootstrap3.client.ui.*;
import org.gwtbootstrap3.client.ui.constants.ValidationState;

import javax.inject.Inject;
import java.util.List;

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
    ListBox currency;
    
    @UiField
    Toolbar toolbar;
    
    @UiField
    FormGroup usernameGroup;
    
    @UiField
    FormGroup passwordGroup;
    

    @Inject
    public UserManagementFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        setButtons();
        toolbar.addToolbarButtonClickedHandler(this);
        init();
    }
    
    public void init() {
		username.addValueChangeHandler(event -> getUiHandlers().getData().setUsername(event.getValue()));
		emailAddress.addValueChangeHandler(event -> getUiHandlers().getData().setEmail(event.getValue()));
		password.addValueChangeHandler(event -> getUiHandlers().getData().setPassword(event.getValue()));
		currency.addChangeHandler(event -> {
			Long index = Long.valueOf(currency.getSelectedIndex());
			getUiHandlers().getData().getCurrencyDTO().setCurrencyId(index + 1);
			getUiHandlers().getData().getCurrencyDTO().setCurrencyCode(currency.getSelectedItemText());
		});
    }
    
    public void setButtons() {
    	toolbar.getRefresh().setVisible(true);
    	toolbar.getSave().setVisible(true);
    }

	@Override
	public void setCurrencyOptions(List<CurrencyDTO> options) {
		currency.clear();
		for(CurrencyDTO dtos : options) {
			currency.addItem(dtos.getCurrencyCode(), dtos.getCurrencyId() + "");
		}
	}

	@Override
	public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
		switch (event.getEventType()) {
			case SAVE:
				getUiHandlers().onSave();
				break;
			case REFRESH:
				Window.alert("Refresh pressed");
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

	@Override
	public void setCurrency(Long currencyId) {
		for (int i = 0; i < currency.getItemCount(); i++) {
			if (currency.getValue(i).equalsIgnoreCase(currencyId + "")) {
				currency.setSelectedIndex(i);
			}
		}
	}
    
}