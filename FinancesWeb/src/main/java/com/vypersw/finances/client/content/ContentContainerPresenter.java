package com.vypersw.finances.client.content;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.google.web.bindery.event.shared.SimpleEventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.presenter.slots.Slot;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import com.vypersw.finances.client.abstractpresenter.VyperPresenterWidget;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountEditorPresenter;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountManagementListPresenter;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.usermanagement.usermanagementform.UserManagementFormPresenter;
import com.vypersw.finances.client.widget.MoveEvent;

public class ContentContainerPresenter extends PresenterWidget<ContentContainerPresenter.MyView> implements ContentContainerUiHandlers, MoveEvent.MoveEventHandlers {

	private EventBus eventBus = new SimpleEventBus();
	private VyperPresenterWidget<?> currentWidget = null;

	@Override
	public HandlerRegistration addMoveEvent(MoveEvent.MoveEventHandler moveEventHandler) {
		return currentWidget.getPresenterEventBus().addHandler(MoveEvent.TYPE, moveEventHandler);
	}

	public interface MyView extends View, HasUiHandlers<ContentContainerUiHandlers> {
		void setTitle(String text);
		void setLoading(boolean loading);
	}

	public static final Slot<VyperPresenterWidget<?>> SLOT_Perspective = new Slot<>();

	private ApplicationPresenter container;
	private ContentType type;
	@Inject
	private UserManagementFormPresenter userPresenter;
	@Inject
	private AccountManagementListPresenter accountPresenter;
	@Inject
	private AccountEditorPresenter accountEditorPresenter;

	@Inject
	public ContentContainerPresenter(EventBus eventBus, MyView view, ApplicationPresenter container) {
		super(eventBus, view);
		this.container = container;
		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
		userPresenter.setData(container.getUserDTO());
	}

	@Override
	protected void onReveal() {
		switch(type) {
			case USER_SETTINGS:
				setInSlot(SLOT_Perspective, userPresenter);
				currentWidget = userPresenter;
				userPresenter.setContentContainerPresenter(this);
				break;
			case ADD_EXPENSE:
			case ADD_INCOME:
				break;
			case ACCOUNT_EDITING:
				setInSlot(SLOT_Perspective, accountEditorPresenter);
				currentWidget = accountEditorPresenter;
				accountEditorPresenter.setContentContainerPresenter(this);
				break;
			case ACCOUNT_MANAGEMENT:
				setInSlot(SLOT_Perspective, accountPresenter);
				currentWidget = accountPresenter;
				accountPresenter.setContentContainerPresenter(this);
				break;
			case REPORTS:
			default:
				break;
		}
	}

	@Override
	public void closePerspective() {
		container.closePerspective(type);
	}

	public void updateTitle(String text) {
		getView().setTitle(text);
	}

	public ContentType getType() {
		return type;
	}

	public void setType(ContentType type) {
		this.type = type;
	}

	public void move(PlaceRequest placeRequest) {
		if (currentWidget != null) {
			currentWidget.getPresenterEventBus().fireEvent(new MoveEvent(placeRequest));
		}
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
            }
        });
    }-*/;

	public native void warn(String message) /*-{
        var notify = $wnd.$.notify({
            message: message
        }, {
            // settings
            element: 'body',
            position: null,
            type: "info",
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
            }
        });
    }-*/;
}