package com.vypersw.finances.client.login;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class LoginView extends ViewWithUiHandlers<LoginUiHandlers> implements LoginPresenter.MyView {
    interface Binder extends UiBinder<Widget, LoginView> {
    }

    @UiField
    Button submit;
    
    @UiField
    PasswordTextBox password;
    
    @UiField
    TextBox username;
    
    @UiField
    Label feedbackLabel;
    
	@Inject
	LoginView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
		submit.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				login();
			}
		});
		
		username.getElement().setPropertyString("placeholder", "Username...");
		password.getElement().setPropertyString("placeholder", "Password...");
	}
	
	@UiHandler("username")
	public void handleUsernameKey(KeyPressEvent e) {
		if (e.getNativeEvent().getKeyCode() == KeyCodes.KEY_ENTER) {
			login();
		}
	}
	
	@UiHandler("password")
	public void handlePasswordKey(KeyPressEvent e) {
		if (e.getNativeEvent().getKeyCode() == KeyCodes.KEY_ENTER) {
			login();
		}
	}


	@Override
	public void login() {
		getUiHandlers().login(username.getText(), password.getText());

	}

	@Override
	public void updateFeedback(String text, String type) {
		feedbackLabel.setText(text);
		if (type.equalsIgnoreCase("success")) {
			feedbackLabel.addStyleName("success");
			feedbackLabel.removeStyleName("error");
		} else {
			feedbackLabel.removeStyleName("success");
			feedbackLabel.setStyleName("error");
		}
		
	}

	@Override
	public void clearInputs() {
		username.setText("");
		password.setText("");
	}
	
}