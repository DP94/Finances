package com.vypersw.finances.client.content;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.presenter.slots.Slot;
import com.vypersw.finances.client.abstractpresenter.VyperFormPresenter;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.usermanagement.usermanagementform.UserManagementFormPresenter;

public class ContentContainerPresenter extends PresenterWidget<ContentContainerPresenter.MyView> implements ContentContainerUiHandlers  {
	
    public interface MyView extends View, HasUiHandlers<ContentContainerUiHandlers>  {
    	void setTitle(String text);
    	void setCurrencyText(String text);
    }
    
    public static final Slot<VyperFormPresenter<?,?>> SLOT_Perspective = new Slot<>();
    
    private ApplicationPresenter container;
    private ContentType type;
    @Inject
    private UserManagementFormPresenter presenter;
    
	@Inject
	public ContentContainerPresenter(EventBus eventBus, MyView view, ApplicationPresenter container) {
		super(eventBus, view);
		this.container = container;
		getView().setUiHandlers(this);
	}

    protected void onBind() {
        super.onBind();
		presenter.setData(container.getUserDTO());
    }
    
    @Override
    protected void onReveal() {
    	switch(type) {
	    	case USER_SETTINGS:
	        	setInSlot(SLOT_Perspective, presenter);
	        	break;
	    	case ADD_EXPENSE:
    		case ADD_INCOME:
    		case ACCOUNT_MANAGEMENT:
    		case REPORTS:
	    	default:
	        	break;
    	}
    	getView().setCurrencyText(container.getUserDTO().getCurrencyDTO().getCurrencyCode());
    }
    
    @Override
    public void closePerspective() {
    	container.closePerspective(type);
    }
    
    public void updateTitle(String text) {
    	getView().setTitle(text);
    }
    
    public void setCurrencyIcon(String currencyCode) {
    	getView().setCurrencyText(currencyCode);
    }
    
	public ContentType getType() {
		return type;
	}

	public void setType(ContentType type) {
		this.type = type;
	}    
}