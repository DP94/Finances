package com.vypersw.finances.client.application;

import javax.inject.Inject;

import org.gwtbootstrap3.client.ui.html.Div;

import com.google.gwt.dom.client.DivElement;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.content.ContentType;
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
    MenuButton addExpense;
    
    @UiField
    MenuButton addIncome;
    
    @UiField
    MenuButton accountManagement;
    
    @UiField
    MenuButton reports;
    
    @UiField
    MenuButton userManagement;
    
    @UiField
    Label nameLabel;
    
    @UiField
    DivElement sidebarDiv;
    
    private boolean show = true;

    @Inject
    public ApplicationView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        init();
    }
    
    public void init() {
    	menuButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				if (show) {
					sidebar.addStyleName("nav-sidebar-visible");
					show = false;
				} else {
					sidebar.removeStyleName("nav-sidebar-visible");
					show = true;
				}
			}
		});
    	
    	logout.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().logout();
			}
		});
    	
    	addExpense.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().openPerspective(ContentType.ADD_EXPENSE);
			}
		});
    	
    	addIncome.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().openPerspective(ContentType.ADD_INCOME);
			}
		});
    	
    	accountManagement.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().openPerspective(ContentType.ACCOUNT_MANAGEMENT);
			}
		});
    	
    	reports.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().openPerspective(ContentType.REPORTS);
			}
		});
    	
    	userManagement.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				getUiHandlers().openPerspective(ContentType.USER_SETTINGS);
			}
		});
    	
    	RootPanel.get().addDomHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				if (!sidebarDiv.isOrHasChild(Element.as(event.getNativeEvent().getEventTarget())) && !menuButton.getElement().isOrHasChild(Element.as(event.getNativeEvent().getEventTarget())) && sidebar.isVisible()) {
					if(!show) {
						sidebar.removeStyleName("nav-sidebar-visible");
						show = true;
					}
				}
				
			}
		}, ClickEvent.getType());
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
		sidebar.setVisible(false);
	}

	@Override
	public void updateUserLabel(String text) {
		nameLabel.setText(text);
	}
}