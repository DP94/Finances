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
import com.vypersw.finances.client.actions.GetCurrenciesAction;
import com.vypersw.finances.client.results.CurrenciesActionResult;

public class UserManagementFormPresenter extends AbstractContentPresenter<UserManagementFormPresenter.MyView> implements UserManagementFormUiHandlers {
    public interface MyView extends View, HasUiHandlers<UserManagementFormUiHandlers> {
    	void setCurrencyOptions(List<String> options);
    }
    
    private DispatchAsync dispatchAsync;
    
    private EventBus eventBus;

	@Inject
	public UserManagementFormPresenter(EventBus eventBus, MyView view, DispatchAsync dispatchAsync) {
		super(eventBus, view);
		this.dispatchAsync = dispatchAsync;
		this.eventBus = eventBus;
		getView().setUiHandlers(this);
	}
	
	@Override
	protected void onReveal() {
		dispatchAsync.execute(new GetCurrenciesAction(), currenciesCallBack);
	}
	
	private AsyncCallback<CurrenciesActionResult> currenciesCallBack = new AsyncCallback<CurrenciesActionResult>() {
		
		@Override
		public void onSuccess(CurrenciesActionResult result) {
			getView().setCurrencyOptions(result.getCurrencies());
		}
		
		@Override
		public void onFailure(Throwable caught) {
			Window.alert(caught.getMessage());
		}
	};
}