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

    @UiField
	ToolbarButton create;

    @UiField
	ToolbarButton delete;

    @UiField
	ToolbarButton edit;
    
    public Toolbar() {
        initWidget(binder.createAndBindUi(this));
	}

	public ToolbarButton getSave() {
		return save;
	}

	public ToolbarButton getRefresh() {
		return refresh;
	}

	public ToolbarButton getCreate() {
		return create;
	}

	public ToolbarButton getDelete() {
		return delete;
	}

	public ToolbarButton getEdit() {
		return edit;
	}

	@UiHandler("save")
	public void onSave(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.SAVE, this);
	}
	
	@UiHandler("refresh")
	public void onRefresh(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.REFRESH, this);
	}

	@UiHandler("create")
	public void onCreate(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.CREATE, this);
	}

	@UiHandler("delete")
	public void onDelete(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.DELETE, this);
	}

	@UiHandler("edit")
	public void onEdit(ClickEvent event) {
		ToolbarButtonClickedEvent.fire(ToolbarEventType.EDIT, this);
	}


	@Override
    public HandlerRegistration addToolbarButtonClickedHandler(ToolbarButtonClickedHandler handler) {
        return this.addHandler(handler, ToolbarButtonClickedEvent.TYPE);
    }


}
