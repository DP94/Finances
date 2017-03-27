package com.vypersw.finances.client.usermanagement.usermanagementform;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.AbstractContentPresenter;
import com.gwtplatform.mvp.client.HasUiHandlers;
public class UserManagementFormPresenter extends AbstractContentPresenter<UserManagementFormPresenter.MyView> implements UserManagementFormUiHandlers {
    public interface MyView extends View, HasUiHandlers<UserManagementFormUiHandlers> {
    }

	@Inject
	public UserManagementFormPresenter(EventBus eventBus, MyView view) {
		super(eventBus, view);

		getView().setUiHandlers(this);
	}

}