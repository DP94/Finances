package com.vypersw.finances.client.abstractpresenter.lists;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperPresenterWidget;
import com.vypersw.finances.client.application.ApplicationPresenter;

public class VyperListPresenter<V extends View> extends VyperPresenterWidget<V> {

	public VyperListPresenter(EventBus eventBus, V view, ApplicationPresenter container) {
		super(eventBus, view, container);
	}



}
