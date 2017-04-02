package com.vypersw.finances.client.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class Toolbar extends Composite {

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
}
