package com.vypersw.finances.client.abstractpresenter;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.dispatch.rpc.shared.DispatchAsync;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.widget.MoveEvent;
import com.vypersw.finances.dto.VyperDTO;

public abstract class VyperFormPresenter<V extends View, D extends VyperDTO> extends VyperPresenterWidget<V> {

	
	private D data;
    private FormState formState;
    protected DispatchAsync dispatchAsync;

    public VyperFormPresenter(EventBus eventBus, DispatchAsync dispatchAsync, V view, ApplicationPresenter container) {
		super(eventBus, view, container);
        this.dispatchAsync = dispatchAsync;
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

    @Override
    public void onMove(MoveEvent event) {
        super.onMove(event);
    }

    public FormState getFormState() {
        return formState;
    }

    public void setFormState(FormState formState) {
        this.formState = formState;
    }
}

