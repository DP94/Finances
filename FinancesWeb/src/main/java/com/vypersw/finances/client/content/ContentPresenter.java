package com.vypersw.finances.client.content;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.vypersw.finances.client.application.ApplicationPresenter;
public class ContentPresenter extends PresenterWidget<ContentPresenter.MyView> implements ContentUiHandlers  {
	
    public interface MyView extends View, HasUiHandlers<ContentUiHandlers>  {
    	void setTitle(String text);
    }
    
    @ContentSlot
    public static final Type<RevealContentHandler<?>> SLOT_Perspective = new Type<RevealContentHandler<?>>();

    private ApplicationPresenter container;
    
	@Inject
	public ContentPresenter(EventBus eventBus, MyView view, ApplicationPresenter presenter) {
		super(eventBus, view);
		this.container = presenter;
		getView().setUiHandlers(this);

	}

    protected void onBind() {
        super.onBind();
    }
    
    @Override
    public void closePerspective() {
    	container.closePerspective();
    }
    
    public void updateTitle(String text) {
    	getView().setTitle(text);
    }

    
}