package com.vypersw.finances.client.abstractpresenter;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;

public class AbstractContentPresenter<V extends View> extends PresenterWidget<V>  {

	public AbstractContentPresenter(EventBus eventBus, V view) {
		super(eventBus, view);
	}
}

