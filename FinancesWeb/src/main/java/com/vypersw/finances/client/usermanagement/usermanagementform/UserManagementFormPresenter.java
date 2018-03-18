package com.vypersw.finances.client.usermanagement.usermanagementform;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.UserAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.UserActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class UserManagementFormPresenter extends VyperFormPresenter<UserManagementFormPresenter.MyView, UserDTO> implements UserManagementFormUiHandlers {
	public interface MyView extends View, HasUiHandlers<UserManagementFormUiHandlers> {
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
		setLoading(true);
		UserAction action = new UserAction();
		action.setDto(getData());
		
		dispatchAsync.execute(action, new AsyncCallback<UserActionResult>() {

			@Override
			public void onFailure(Throwable caught) {
				setLoading(false);
				Window.alert(caught.getMessage());
			}

			@Override
			public void onSuccess(UserActionResult result) {
				setLoading(false);
				setData(result.getDto());
				getContentContainerPresenter().success("Save successful");
			}
		});
	}
	
	@Override
	public void initaliseForm() {
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