package com.vypersw.finances.client.login;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import com.vypersw.finances.client.actions.LoginAction;
import com.vypersw.finances.client.place.NameTokens;
import com.vypersw.finances.client.results.LoginActionResult;

import javax.inject.Inject;

public class LoginPresenter extends Presenter<LoginPresenter.MyView, LoginPresenter.MyProxy> implements LoginUiHandlers {
    public interface MyView extends View, HasUiHandlers<LoginUiHandlers> {
		void login();

		void updateFeedback(String text, String type);

		void clearInputs();
    }
    
    private String feedbackText = "";
	private String feedbackType;
	
    @ProxyStandard
    @NameToken(NameTokens.login)
    interface MyProxy extends ProxyPlace<LoginPresenter> {
    }
    
    @Inject
    PlaceManager placeManager;
    
    private DispatchAsync dispatchAsync;

	@Inject
	LoginPresenter(EventBus eventBus, MyView view, MyProxy proxy, DispatchAsync dispatchAsync) {
		super(eventBus, view, proxy, RevealType.Root);
		getView().setUiHandlers(this);
		this.dispatchAsync = dispatchAsync;
	}
	
	@Override
	public void prepareFromRequest(PlaceRequest request) {
		super.prepareFromRequest(request);
		feedbackText = request.getParameter("feedbackText", "");
		feedbackType = request.getParameter("feedbackType", "");
	}
	
	@Override
	protected void onReset() {
		super.onReset();
		getView().updateFeedback(feedbackText, feedbackType);
		feedbackText = null;
		feedbackType = null;
	}

	public void login(String username, String password) {
		LoginAction action = new LoginAction(username, password);
		dispatchAsync.execute(action, loginCallback);
	}
	
	private AsyncCallback<LoginActionResult> loginCallback = new AsyncCallback<LoginActionResult>() {
		
		@Override
		public void onSuccess(LoginActionResult result) {
			if (result.getDto() != null) {
				PlaceRequest request = new PlaceRequest.Builder().nameToken(NameTokens.home).build();
				placeManager.revealPlace(request);
			} else {
				getView().updateFeedback("Invalid username or password", "error");
				getView().clearInputs();
			}
		}
		
		@Override
		public void onFailure(Throwable caught) {
			Window.alert(caught.getMessage());
		}
	};
}