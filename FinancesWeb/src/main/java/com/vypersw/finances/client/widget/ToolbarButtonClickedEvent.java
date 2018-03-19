package com.vypersw.finances.client.widget;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HasHandlers;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class ToolbarButtonClickedEvent extends GwtEvent<ToolbarButtonClickedEvent.ToolbarButtonClickedHandler> {
        
	public enum ToolbarEventType {
		SAVE, REFRESH, CREATE
	}
	
	
    public interface ToolbarButtonClickedHandler extends EventHandler {
        void onToolbarButtonClicked(ToolbarButtonClickedEvent event);
    }
    
	public interface HasToolbarButtonClickedHandlers extends HasHandlers { 
		HandlerRegistration addToolbarButtonClickedHandler(ToolbarButtonClickedHandler handler);
	}
    
    public static Type<ToolbarButtonClickedHandler> TYPE = new Type<ToolbarButtonClickedHandler>();
        
    private final ToolbarEventType eventType;
   
    public ToolbarButtonClickedEvent(final ToolbarEventType eventType) {
        this.eventType = eventType;
    }
    
    public static void fire(ToolbarEventType eventType, HasHandlers source) {
    	source.fireEvent(new ToolbarButtonClickedEvent(eventType));
    }


    @Override
    protected void dispatch(final ToolbarButtonClickedHandler handler) {
        handler.onToolbarButtonClicked(this);
    }

    @Override
    public Type<ToolbarButtonClickedHandler> getAssociatedType() {
        return TYPE;
    }
    
    public ToolbarEventType getEventType() {
        return this.eventType;
    }
    
    public static Type<ToolbarButtonClickedHandler> getType() {
        return TYPE;
    }

}
