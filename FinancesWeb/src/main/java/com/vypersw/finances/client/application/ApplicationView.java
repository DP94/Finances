package com.vypersw.finances.client.application;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.MenuButton;

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
    HTMLPanel sidebar;
    
    @UiField
    Button menuButton;
    
    @UiField
    MenuButton logout;
    
    @UiField
    MenuButton add;

    @Inject
    public ApplicationView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        init();
    }
    
    public void init() {
    	menuButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				sidebar.setVisible(!sidebar.isVisible());
			}
		});
    	
    	logout.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().logout();
			}
		});
    	
    	add.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().openPerspective();
			}
		});
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
    	super.removeFromSlot(slot, content);
    	if (slot == ApplicationPresenter.SLOT_content) {
    		contentPanel.clear();
    	}
    }

	@Override
	public void closeMenu() {
		sidebar.setVisible(false);
	}
}