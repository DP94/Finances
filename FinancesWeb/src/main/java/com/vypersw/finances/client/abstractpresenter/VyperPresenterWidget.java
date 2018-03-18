package com.vypersw.finances.client.abstractpresenter;

import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.event.shared.SimpleEventBus;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.widget.MoveEvent;

public class VyperPresenterWidget<V extends View> extends PresenterWidget<V> implements MoveEvent.MoveEventHandler {

	private ApplicationPresenter container;
	private EventBus presenterEventBus = new SimpleEventBus();
	private ContentContainerPresenter contentContainerPresenter;
	
	public VyperPresenterWidget(EventBus eventBus, V view, ApplicationPresenter container) {
		super(eventBus, view);
		this.container = container;
	}
	
	public ApplicationPresenter getContainer() {
		return container;
	}

	public EventBus getPresenterEventBus() {
		return presenterEventBus;
	}

	public void setContentContainerPresenter(ContentContainerPresenter contentContainerPresenter) {
		this.contentContainerPresenter = contentContainerPresenter;
		this.contentContainerPresenter.addMoveEvent(this);
	}

	@Override
	public void onMove(MoveEvent event) {

	}

	public ContentContainerPresenter getContentContainerPresenter() {
		return contentContainerPresenter;
	}

	public void setLoading(boolean loading) {
		contentContainerPresenter.getView().setLoading(loading);
	}
}
