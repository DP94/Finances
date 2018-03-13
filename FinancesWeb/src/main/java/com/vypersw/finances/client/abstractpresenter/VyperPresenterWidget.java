package com.vypersw.finances.client.abstractpresenter;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.application.ApplicationPresenter;

public class VyperPresenterWidget<V extends View> extends PresenterWidget<V> {

	private ApplicationPresenter container;
	
	public VyperPresenterWidget(EventBus eventBus, V view, ApplicationPresenter container) {
		super(eventBus, view);
		this.container = container;
	}

	public void setCurrencyIcon(String currencyCode) {
		container.updatePerspectiveCurrency(currencyCode);
	}
	
	public ApplicationPresenter getContainer() {
		return container;
	}
}
