package com.vypersw.finances.client.content;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class ContentView extends ViewWithUiHandlers<ContentUiHandlers> implements ContentPresenter.MyView {
    interface Binder extends UiBinder<Widget, ContentView> {
    }

    @UiField
    HTMLPanel main;
    
    @UiField
    Label title;
    
    @UiField
    Button close;

    @Inject
    ContentView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        
        close.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				// TODO Auto-generated method stub
				getUiHandlers().closePerspective();
			}
		});
    }
    
    @Override
    public void setInSlot(Object slot, IsWidget content) {
    	if (slot == ContentPresenter.SLOT_Perspective) {
    		main.clear();
    		if (content != null) {
    			main.add(content);
    		}
    	} else {
        	super.setInSlot(slot, content);
    	}
    }

	@Override
	public void setTitle(String text) {
		title.setText(text);
	}
}