package com.vypersw.finances.client.widget;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.PopupPanel;
import org.gwtbootstrap3.client.ui.html.Div;

public class LoadingSpinner extends PopupPanel {

    private Div div = new Div();

    public LoadingSpinner() {
        super();
        setGlassEnabled(true);
        setLoading();
        DOM.appendChild(getContainerElement(), div.getElement());
    }

    public void setLoading() {
        setStyleName("loading-full flex center");
        div.setStyleName("loading-inner");
    }
}
