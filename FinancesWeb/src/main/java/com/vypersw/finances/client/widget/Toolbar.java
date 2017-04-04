package com.vypersw.finances.client.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent.HasToolbarButtonClickedHandlers;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent.ToolbarButtonClickedHandler;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent.ToolbarEventType;

public class Toolbar extends Composite implements HasToolbarButtonClickedHandlers {

	private static Binder binder = GWT.create(Binder.class);

    interface Binder extends UiBinder<Widget, Toolbar> {
    }
    
    @UiField
    ToolbarButton save;
    
    @UiField
    ToolbarButton refresh;
    
    public Toolbar() {
        initWidget(binder.createAndBindUi(this));
	}

	public ToolbarButton getSave() {
		return save;
	}

	public void setSave(ToolbarButton save) {
		this.save = save;
	}

	public ToolbarButton getRefresh() {
		return refresh;
	}

	public void setRefresh(ToolbarButton refresh) {
		this.refresh = refresh;
	}
	
	@UiHandler("save")
	public void onSave(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.SAVE, this);
	}
	
	@UiHandler("refresh")
	public void onRefresh(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.REFRESH, this);
	}
	
    @Override
    public HandlerRegistration addToolbarButtonClickedHandler(ToolbarButtonClickedHandler handler) {
        return this.addHandler(handler, ToolbarButtonClickedEvent.TYPE);
    }


}
