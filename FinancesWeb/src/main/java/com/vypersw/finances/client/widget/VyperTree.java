package com.vypersw.finances.client.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.Widget;
import com.vypersw.finances.dto.VyperDTO;
import org.gwtbootstrap3.client.ui.Button;

public class VyperTree<T extends VyperDTO> extends Composite {
    private static Binder binder = GWT.create(Binder.class);

    interface Binder extends UiBinder<Widget, VyperTree> {
    }

    @UiField
    Tree tree;

    @UiField
    Button add;

    public VyperTree() {
        initWidget(binder.createAndBindUi(this));
    }

    public Tree getTree() {
        return tree;
    }

    @UiHandler("add")
    public void onAdd(ClickEvent clickEvent) {
        AddCategoryPopup addCategoryPopup = new AddCategoryPopup();
        addCategoryPopup.setGlassEnabled(true);
        addCategoryPopup.center();
        addCategoryPopup.show();
    }
}
