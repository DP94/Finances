package com.vypersw.finances.client.application;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

import javax.inject.Inject;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Provider;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.presenter.slots.Slot;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
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
    	void updateUserLabel(String text);
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
    
    private LinkedList<ContentContainerPresenter> openSlots = new LinkedList<>();
    
    private String username;
    
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
		getView().updateUserLabel(constants.welcomeX() + " " + username);
	}
	
	@Override
	public void prepareFromRequest(PlaceRequest request) {
		username = request.getParameter("username", "");
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
		if (!perspectives.containsKey(type)) {
			ContentContainerPresenter presenter = presenterProvider.get();
			presenter.updateTitle(type.getName());
			presenter.setType(type);
			perspectives.put(type, presenter);
			openSlots.add(presenter);
			setInSlot(SLOT_content, presenter);
		} else {
			ContentContainerPresenter presenter = perspectives.get(type);
			setInSlot(SLOT_content, presenter);
			openSlots.remove(presenter);
			openSlots.add(presenter);
		}
		getView().closeMenu();
	}
	
	@Override
	public void closePerspective(ContentType type) {
		ContentContainerPresenter presenter = perspectives.get(type);
		removeFromSlot(SLOT_content, presenter);
		if (openSlots.size() > 1) {
			openSlots.remove(presenter);
			setInSlot(SLOT_content, openSlots.getLast());
		}
		perspectives.remove(type);
	}
}