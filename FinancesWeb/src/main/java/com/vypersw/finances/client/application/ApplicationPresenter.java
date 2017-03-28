package com.vypersw.finances.client.application;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Provider;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.presenter.slots.Slot;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.proxy.RevealRootContentEvent;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import com.vypersw.finances.client.actions.LogoutAction;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.content.ContentType;
import com.vypersw.finances.client.i18n.FinancesConstants;
import com.vypersw.finances.client.place.NameTokens;
import com.vypersw.finances.client.results.LogoutActionResult;

public class ApplicationPresenter extends Presenter<ApplicationPresenter.MyView, ApplicationPresenter.MyProxy> implements ApplicationUiHandlers {
    interface MyView extends View, HasUiHandlers<ApplicationUiHandlers> {
    	void closeMenu();
    }
    
    @Inject
    private PlaceManager placeManager;
    
    @Inject
    private FinancesConstants constants;
    
    private DispatchAsync dispatchAsync;
    
    @Inject
    private Provider<ContentContainerPresenter> presenterProvider;
    
    private Map<ContentType, ContentContainerPresenter> perspectives = new HashMap<>();
    
    public static final Slot<ContentContainerPresenter> SLOT_content = new Slot<>();
    
    @ProxyCodeSplit
    @NameToken(NameTokens.home)
    interface MyProxy extends ProxyPlace<ApplicationPresenter> {
    }

	@Inject
	ApplicationPresenter(EventBus eventBus, MyView view, MyProxy proxy, DispatchAsync dispatchAsync) {
		super(eventBus, view, proxy);
		getView().setUiHandlers(this);
		this.dispatchAsync = dispatchAsync;
    }
	
	@Override
	protected void revealInParent() {
		RevealRootContentEvent.fire(this, this);
	}

	@Override
	protected void onReset() {
		super.onReset();
	}

	@Override
	public void logout() {
		LogoutAction action = new LogoutAction();
		dispatchAsync.execute(action, callback);
	}
	
	private AsyncCallback<LogoutActionResult> callback = new AsyncCallback<LogoutActionResult>() {
		@Override
		public void onFailure(Throwable caught) {
			Window.alert(caught.getMessage());
		}

		@Override
		public void onSuccess(LogoutActionResult result) {
			getView().closeMenu();
			for(ContentContainerPresenter presenter : perspectives.values()) {
				removeFromSlot(SLOT_content, presenter);
			}
			PlaceRequest request = new PlaceRequest.Builder()
					.nameToken(NameTokens.login)
					.with("feedbackText", constants.successfullyLoggedOut())
					.with("feedbackType", "success")
					.build();
			placeManager.revealPlace(request);
		}
	};

	@Override
	public void openPerspective(ContentType type) {
		ContentContainerPresenter presenter = presenterProvider.get();
		presenter.updateTitle(type.getName());
		presenter.setType(type);
		perspectives.put(type, presenter);
		setInSlot(SLOT_content, presenter);
		getView().closeMenu();
	}
	
	@Override
	public void closePerspective(ContentType type) {
		ContentContainerPresenter presenter = perspectives.get(type);
		removeFromSlot(SLOT_content, presenter);
		perspectives.remove(type);
	}
}