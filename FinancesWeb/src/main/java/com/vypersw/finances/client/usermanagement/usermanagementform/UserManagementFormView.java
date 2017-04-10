package com.vypersw.finances.client.usermanagement.usermanagementform;

import java.util.List;

import javax.inject.Inject;

import org.gwtbootstrap3.client.ui.FormGroup;
import org.gwtbootstrap3.client.ui.Input;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.NavTabs;
import org.gwtbootstrap3.client.ui.TabContent;
import org.gwtbootstrap3.client.ui.TabListItem;
import org.gwtbootstrap3.client.ui.TextBox;
import org.gwtbootstrap3.client.ui.constants.ValidationState;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
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
    	username.addValueChangeHandler(new ValueChangeHandler<String>() {
			@Override
			public void onValueChange(ValueChangeEvent<String> event) {
				getUiHandlers().getData().setUsername(event.getValue());
			}
		});
    	emailAddress.addValueChangeHandler(new ValueChangeHandler<String>() {
			@Override
			public void onValueChange(ValueChangeEvent<String> event) {
				getUiHandlers().getData().setEmail(event.getValue());
			}
		});
    	password.addValueChangeHandler(new ValueChangeHandler<String>() {
			@Override
			public void onValueChange(ValueChangeEvent<String> event) {
				getUiHandlers().getData().setPassword(event.getValue());
			}
		});
    	currency.addChangeHandler(new ChangeHandler() {
			@Override
			public void onChange(ChangeEvent event) {
				Long index = Long.valueOf(currency.getSelectedIndex());
				getUiHandlers().getData().getCurrencyDTO().setCurrencyId(index + 1);
			}
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
		boolean create = false;
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
	public void setUsername(String name) {
		username.setText(name);
	}

	@Override
	public void setPassword(String password) {
		this.password.setText(password);
	}

	@Override
	public void setEmail(String email) {
		emailAddress.setText(email);
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