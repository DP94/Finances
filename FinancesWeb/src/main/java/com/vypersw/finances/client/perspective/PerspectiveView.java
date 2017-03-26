package com.vypersw.finances.client.perspective;

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

public class PerspectiveView extends ViewWithUiHandlers<PerspectiveUiHandlers> implements PerspectivePresenter.MyView {
    interface Binder extends UiBinder<Widget, PerspectiveView> {
    }

    @UiField
    HTMLPanel main;
    
    @UiField
    Label title;
    
    @UiField
    Button close;

    @Inject
    PerspectiveView(Binder uiBinder) {
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
    	if (slot == PerspectivePresenter.SLOT_Perspective) {
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