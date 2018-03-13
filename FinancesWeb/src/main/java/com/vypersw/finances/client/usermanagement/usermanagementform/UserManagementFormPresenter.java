package com.vypersw.finances.client.usermanagement.usermanagementform;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.actions.UserAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.GetCurrenciesActionResult;
import com.vypersw.finances.client.results.UserActionResult;
import com.vypersw.finances.dto.currency.CurrencyDTO;
import com.vypersw.finances.dto.user.UserDTO;

import java.util.List;

public class UserManagementFormPresenter extends VyperFormPresenter<UserManagementFormPresenter.MyView, UserDTO> implements UserManagementFormUiHandlers {
	public interface MyView extends View, HasUiHandlers<UserManagementFormUiHandlers> {
    	void setCurrencyOptions(List<CurrencyDTO> options);
    	void setCurrency(Long currencyId);
    	void setViewData(UserDTO dto);
    }
    
    private DispatchAsync dispatchAsync;

	@Inject
	public UserManagementFormPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync, ApplicationPresenter container) {
		super(eventBus, view, container);
		this.dispatchAsync = dispatchAsync;
		getView().setUiHandlers(this);
	}

	@Override
	public void onSave() {
		UserAction action = new UserAction();
		action.setDto(getData());
		
		dispatchAsync.execute(action, new AsyncCallback<UserActionResult>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}

			@Override
			public void onSuccess(UserActionResult result) {
				setData(result.getDto());
				setCurrencyIcon(getData().getCurrencyDTO().getCurrencyCode());
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
				getView().setCurrency(getData().getCurrencyDTO().getCurrencyId());
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
			getView().setViewData(data);
		}
		
	}
	
	@Override
	public UserDTO getData() {
		return super.getData();
	}

	
}