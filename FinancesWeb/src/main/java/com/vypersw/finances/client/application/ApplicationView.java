package com.vypersw.finances.client.application;

import com.google.gwt.dom.client.DivElement;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.*;
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
    MenuButton addExpense;
    
    @UiField
    MenuButton addIncome;
    
    @UiField
    MenuButton accountManagement;
    
    @UiField
    MenuButton reports;
    
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
    	
    	addExpense.addClickHandler(event -> getUiHandlers().move(ContentType.ADD_EXPENSE, null));
    	
    	addIncome.addClickHandler(event -> getUiHandlers().move(ContentType.ADD_INCOME, null));
    	
    	accountManagement.addClickHandler(event -> getUiHandlers().move(ContentType.ACCOUNT_MANAGEMENT, null));
    	
    	reports.addClickHandler(event -> getUiHandlers().move(ContentType.REPORTS, null));
    	
    	userManagement.addClickHandler(event -> getUiHandlers().move(ContentType.USER_SETTINGS, null));
    	
//    	RootPanel.get().addDomHandler(event -> {
//            if (!sidebarDiv.isOrHasChild(Element.as(event.getNativeEvent().getEventTarget())) && !menuButton.getElement().isOrHasChild(Element.as(event.getNativeEvent().getEventTarget())) && sidebar.isVisible()) {
//                if(!show) {
//                    sidebar.removeStyleName("nav-sidebar-visible");
//                    show = true;
//                }
//            }
//
//        }, ClickEvent.getType());
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

	@Override
	public void closeMenu() {
		//sidebar.removeStyleName("nav-sidebar-visible");
		show = true;
	}

}