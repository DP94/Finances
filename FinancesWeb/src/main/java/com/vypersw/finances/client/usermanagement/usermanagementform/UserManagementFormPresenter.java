package com.vypersw.finances.client.usermanagement.usermanagementform;

import java.util.List;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.AbstractContentPresenter;
import com.vypersw.finances.client.actions.CreateUserAction;
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.results.CreateUserActionResult;
import com.vypersw.finances.client.results.GetCurrenciesActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class UserManagementFormPresenter extends AbstractContentPresenter<UserManagementFormPresenter.MyView, UserDTO> implements UserManagementFormUiHandlers {
    public interface MyView extends View, HasUiHandlers<UserManagementFormUiHandlers> {
    	void setCurrencyOptions(List<String> options);
    	void setCurrentUserName(String name);
    	void setCurrentPassword(String password);
    	void setCurrentEmail(String email);
    	void setCurrentCurrency(String currency);
    	String getUsername();
    	String getPassword();
    }
    
    private DispatchAsync dispatchAsync;

	@Inject
	public UserManagementFormPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync) {
		super(eventBus, view);
		this.dispatchAsync = dispatchAsync;
		getView().setUiHandlers(this);
	}

	@Override
	public void onSave() {
		UserDTO dto = new UserDTO();
		dto.setUsername(getView().getUsername());
		dto.setPassword(getView().getPassword());
		
		CreateUserAction action = new CreateUserAction();
		action.setDto(dto);
		
		dispatchAsync.execute(action, new AsyncCallback<CreateUserActionResult>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}

			@Override
			public void onSuccess(CreateUserActionResult result) {
			}
		});
		
	}
	
	@Override
	public void initaliseForm() {
		//Get all currencies from the database and
		dispatchAsync.execute(new GetCurrenciesAction(), new AsyncCallback<GetCurrenciesActionResult>() {
			
			@Override
			public void onSuccess(GetCurrenciesActionResult result) {
				getView().setCurrencyOptions(result.getCurrencies());
			}
			
			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}
		});
	}

	@Override
	public void setFormData(UserDTO data) {
		if (data != null) {
			super.setData(data);
			getView().setCurrentUserName(data.getUsername());
			getView().setCurrentEmail(data.getEmail());
			getView().setCurrentPassword(data.getPassword());
			getView().setCurrentCurrency(data.getCurrencyDTO().getCurrencyCode());
		}
		
	}

	
}