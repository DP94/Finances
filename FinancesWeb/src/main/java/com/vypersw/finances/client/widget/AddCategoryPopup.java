package com.vypersw.finances.client.widget;

import com.google.gwt.user.client.ui.PopupPanel;
import org.gwtbootstrap3.client.ui.Label;

public class AddCategoryPopup extends PopupPanel {

    public AddCategoryPopup() {
        super(true);

        setWidget(new Label("Testing"));
    }
}
