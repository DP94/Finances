package com.vypersw.finances.client.usermanagement.usermanagementform;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.actions.GetUserAction;
import com.vypersw.finances.client.actions.UserAction;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.results.GetUserActionResult;
import com.vypersw.finances.client.results.UserActionResult;
import com.vypersw.finances.dto.user.UserDTO;

public class UserManagementFormPresenter extends VyperFormPresenter<UserManagementFormPresenter.MyView, UserDTO> implements UserManagementFormUiHandlers {
	public interface MyView extends View, HasUiHandlers<UserManagementFormUiHandlers> {
    	void setViewData(UserDTO dto);
    }

	@Inject
	public UserManagementFormPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync, ApplicationPresenter container) {
		super(eventBus, dispatchAsync, view, container);
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
                getContentContainerPresenter().getContainer().success("Save successful");
			}
		});
	}

	@Override
	public void onRefresh() {
		initaliseForm();
	}

	@Override
	public void initaliseForm() {
		setLoading(true);
		GetUserAction getUserAction = new GetUserAction();
		getUserAction.setUserDTO(getContainer().getUserDTO());
		dispatchAsync.execute(getUserAction, new AsyncCallback<GetUserActionResult>() {
			@Override
			public void onFailure(Throwable throwable) {
				setLoading(false);
				Window.alert(throwable.getMessage());
			}

			@Override
			public void onSuccess(GetUserActionResult userActionResult) {
				setLoading(false);
				setData(userActionResult.getUserDTO());
				getView().setViewData(userActionResult.getUserDTO());
			}
		});
	}

	@Override
	public UserDTO getFormData() {
		return null;
	}

	@Override
	public void setFormData(UserDTO data) {
		initaliseForm();
	}
	
	@Override
	public UserDTO getData() {
		return super.getData();
	}

	
}