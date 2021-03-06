package com.vypersw.finances.client.application;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.content.ContentType;
import com.vypersw.finances.client.widget.MenuButton;

import javax.inject.Inject;

public class ApplicationView extends ViewWithUiHandlers<ApplicationUiHandlers> implements ApplicationPresenter.MyView {
    interface Binder extends UiBinder<Widget, ApplicationView> {
    }

    @UiField
    HTMLPanel main;
    
    @UiField
    HTMLPanel navHeader;
    
    @UiField
    HTMLPanel contentPanel;
    
    @UiField
    MenuButton logout;
    
    @UiField
    MenuButton add;
    
    @UiField
    MenuButton accountManagement;
    
    @UiField
    MenuButton reports;

    @UiField
    MenuButton transfer;
    
    @UiField
    MenuButton userManagement;
    
    private boolean show = true;

    @Inject
    public ApplicationView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        init();
    }
    
    public void init() {
    	
    	logout.addClickHandler(event -> getUiHandlers().logout());

        add.addClickHandler(event -> getUiHandlers().move(ContentType.ADD, null));
    	
    	accountManagement.addClickHandler(event -> getUiHandlers().move(ContentType.ACCOUNT_MANAGEMENT, null));
    	
    	reports.addClickHandler(event -> getUiHandlers().move(ContentType.REPORTS, null));
    	
    	userManagement.addClickHandler(event -> getUiHandlers().move(ContentType.USER_SETTINGS, null));

    	transfer.addClickHandler(clickEvent -> getUiHandlers().move(ContentType.ACCOUNT_TRANSFER, null));
    }
    
    @Override
    public void setInSlot(Object slot, IsWidget content) {
    	if (slot == ApplicationPresenter.SLOT_content) {
    		contentPanel.clear();
    		if (content != null) {
    			contentPanel.add(content);
    		}
    	} else {
        	super.setInSlot(slot, content);
    	}
    }
    
    @Override
    public void removeFromSlot(Object slot, IsWidget content) {
    	if (slot == ApplicationPresenter.SLOT_content) {
    		contentPanel.remove(content);
    	} else {
        	super.removeFromSlot(slot, content);
    	}
    }
}