package com.vypersw.finances.client.abstractpresenter;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.widget.MoveEvent;
import com.vypersw.finances.dto.VyperDTO;

public abstract class VyperFormPresenter<V extends View, D extends VyperDTO> extends VyperPresenterWidget<V> implements MoveEvent.MoveEventHandler {

	
	private D data;
    private ContentContainerPresenter contentContainerPresenter;

	public VyperFormPresenter(EventBus eventBus, V view, ApplicationPresenter container) {
		super(eventBus, view, container);
	}
	
	@Override
	protected void onBind() {
		super.onBind();
	}
	
	@Override
	protected void onReveal() {
		super.onReveal();
		setFormData(data);
	}
	
	public abstract void setFormData(D data);
	public abstract void initaliseForm();

	public D getData() {
		return data;
	}

	public void setData(D data) {
		this.data = data;
	}

    public void setContentContainerPresenter(ContentContainerPresenter contentContainerPresenter) {
        this.contentContainerPresenter = contentContainerPresenter;
        this.contentContainerPresenter.addMoveEvent(this);
    }

    @Override
    public void onMove(MoveEvent event) {

    }
}

