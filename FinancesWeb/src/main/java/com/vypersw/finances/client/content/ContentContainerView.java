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

public class ContentContainerView extends ViewWithUiHandlers<ContentContainerUiHandlers> implements ContentContainerPresenter.MyView {
    interface Binder extends UiBinder<Widget, ContentContainerView> {
    }

    @UiField
    HTMLPanel main;
    
    @UiField
    HTMLPanel contentContainer;
    
    @UiField
    Label title;
    
    @UiField
    Button close;
    
    @UiField
    Label currency;

    @Inject
    ContentContainerView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        
        close.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().closePerspective();
			}
		});
    }
    
    
    
    @Override
    public void setInSlot(Object slot, IsWidget content) {
    	if (slot == ContentContainerPresenter.SLOT_Perspective) {
    		contentContainer.clear();
    		if (content != null) {
    			contentContainer.add(content);
    		}
    	} else {
        	super.setInSlot(slot, content);
    	}
    }

	@Override
	public void setTitle(String text) {
		title.setText(text);
	}

	public void setCurrencyText(String code) {
		switch (code) {
			case "USD":
				currency.setStyleName("glyphicon glyphicon-usd");
				break;
			case "EUR":
				currency.setStyleName("glyphicon glyphicon-eur");
				break;
			default:
				currency.setStyleName("glyphicon glyphicon-gbp");
				break;
		}
	}
}