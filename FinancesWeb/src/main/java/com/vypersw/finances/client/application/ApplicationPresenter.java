package com.vypersw.finances.client.application;

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
import com.vypersw.finances.client.ClientStorage;
import com.vypersw.finances.client.actions.InitSessionAction;
import com.vypersw.finances.client.actions.LogoutAction;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.content.ContentType;
import com.vypersw.finances.client.i18n.FinancesConstants;
import com.vypersw.finances.client.place.NameTokens;
import com.vypersw.finances.client.results.InitSessionActionResult;
import com.vypersw.finances.client.results.LogoutActionResult;
import com.vypersw.finances.dto.user.UserDTO;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class ApplicationPresenter extends Presenter<ApplicationPresenter.MyView, ApplicationPresenter.MyProxy> implements ApplicationUiHandlers {
    interface MyView extends View, HasUiHandlers<ApplicationUiHandlers> {
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

    private UserDTO userDTO;

    private long currentAccountId;
    
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
	protected void onReveal() {
		super.onReveal();
		dispatchAsync.execute(new InitSessionAction(), new AsyncCallback<InitSessionActionResult>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}

			@Override
			public void onSuccess(InitSessionActionResult result) {
				userDTO = result.getDto();
				if (userDTO == null) {
					for (ContentContainerPresenter presenter : perspectives.values()) {
						removeFromSlot(SLOT_content, presenter);
					}
					PlaceRequest request = new PlaceRequest.Builder()
							.nameToken(NameTokens.login)
                            .with("feedbackText", constants.sessionTimeout())
							.with("feedbackType", "success")
							.build();
					placeManager.revealPlace(request);
				}
				ClientStorage.storeValue(ClientStorage.USER_ID, String.valueOf(userDTO.getId()));
			}
		});
	}

	@Override
	public void prepareFromRequest(PlaceRequest request) {
		super.prepareFromRequest(request);
		String action = request.getParameter("action", "");
		if (action != null && action.length() > 0) {
			ContentType contentType = ContentType.valueOf(action);
			ContentContainerPresenter presenter = openPerspective(contentType);
			presenter.move(request);
		} else {
			for (ContentContainerPresenter contentContainerPresenter : openSlots) {
				contentContainerPresenter.closePerspective();
			}
			openSlots.clear();
			perspectives.clear();
		}
	}

	@Override
	protected void revealInParent() {
		RevealRootContentEvent.fire(this, this);
	}
	
	@Override
	public void logout() {
		LogoutAction action = new LogoutAction();
		dispatchAsync.execute(action, new AsyncCallback<LogoutActionResult>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}

			@Override
			public void onSuccess(LogoutActionResult result) {
				//Is this needed? Shouldn't we just leave it and let it clear from memory?
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
		});
	}

	@Override
	public ContentContainerPresenter openPerspective(ContentType type) {
		ContentContainerPresenter vyperPresenterWidget = null;
		if (!perspectives.containsKey(type)) {
			ContentContainerPresenter presenter = presenterProvider.get();
			presenter.updateTitle(type.getName());
			presenter.setType(type);
			perspectives.put(type, presenter);
			openSlots.add(presenter);
			setInSlot(SLOT_content, presenter);
			vyperPresenterWidget = presenter;
		} else {
			ContentContainerPresenter presenter = perspectives.get(type);
			setInSlot(SLOT_content, presenter);
			openSlots.add(presenter);
			vyperPresenterWidget = presenter;
		}
		return vyperPresenterWidget;
	}

	public void move(ContentType contentType, Map<String, String> params) {
        if (perspectives.containsKey(contentType)) {
            ContentContainerPresenter presenter = perspectives.get(contentType);
            setInSlot(SLOT_content, presenter);
        } else {
            if (params == null) {
                params = new HashMap<>();
            }
            params.put("action", contentType.toString());
            PlaceRequest request = new PlaceRequest.Builder().nameToken(NameTokens.home).with(params).build();
            placeManager.revealPlace(request);
        }
	}
	
	@Override
	public void closePerspective(ContentType type) {
		ContentContainerPresenter presenter = perspectives.get(type);
		removeFromSlot(SLOT_content, presenter);
		if (openSlots.size() > 1) {
			openSlots.remove(presenter);
			setInSlot(SLOT_content, openSlots.getLast());
            perspectives.remove(type);
		} else {
			openSlots.remove(presenter);
            perspectives.remove(type);
            PlaceRequest request = new PlaceRequest.Builder().nameToken(NameTokens.home).with("username", userDTO.getUsername()).build();
            placeManager.revealPlace(request);
		}
	}

	public UserDTO getUserDTO() {
		return userDTO;
	}

    public native void success(String message) /*-{
        var notify = $wnd.$.notify({
            message: message
        }, {
            // settings
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "center"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown'
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }-*/;

    public native void warn(String message) /*-{
        var notify = $wnd.$.notify({
            message: message
        }, {
            // settings
            element: 'body',
            position: null,
            type: "danger",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "center"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown'
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }-*/;
}