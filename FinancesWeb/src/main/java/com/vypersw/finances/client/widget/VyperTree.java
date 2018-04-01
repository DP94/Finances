package com.vypersw.finances.client.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.TreeItem;
import com.google.gwt.user.client.ui.Widget;
import com.vypersw.finances.dto.CategoryDTO;
import org.gwtbootstrap3.client.ui.Button;
import org.gwtbootstrap3.client.ui.TextBox;

public class VyperTree extends Composite implements VyperTreeNodeChangeEvent.HasVyperTreeNodeChangeEventHandlers {
    private static Binder binder = GWT.create(Binder.class);

    interface Binder extends UiBinder<Widget, VyperTree> {
    }

    @UiField
    Tree tree;

    @UiField
    Button add;

    @UiField
    Button delete;

    @UiField
    TextBox name;

    private CategoryDTO selectedNode;
    private TreeItem selectedTreeItem;

    public VyperTree() {
        initWidget(binder.createAndBindUi(this));
        tree.addSelectionHandler(selectionEvent -> {
            selectedNode = (CategoryDTO) selectionEvent.getSelectedItem().getUserObject();
            selectedTreeItem = selectionEvent.getSelectedItem();
        });
    }

    public Tree getTree() {
        return tree;
    }

    @UiHandler("add")
    public void onAdd(ClickEvent clickEvent) {
        if (name.getText() != null && name.getText().length() > 0) {
            TreeItem treeItem = new TreeItem();
            treeItem.setText(name.getText());
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setName(name.getText());
            categoryDTO.setId(0L);
            treeItem.setUserObject(categoryDTO);
            if (selectedNode != null) {
                categoryDTO.setParentCategory(selectedNode.getId());
            } else {
                categoryDTO.setParentCategory(null);
            }
            VyperTreeNodeChangeEvent.fire(categoryDTO,true, this);
        }
    }

    @UiHandler("delete")
    public void onDelete(ClickEvent clickEvent) {
        if (selectedTreeItem != null) {
            VyperTreeNodeChangeEvent.fire(selectedNode, false,this);
            selectedTreeItem = null;
            selectedNode = null;
        }
    }

    @Override
    public HandlerRegistration addVyperTreeNodeChangeEventHandlers(VyperTreeNodeChangeEvent.VyperTreeNodeChangeEventHandler handler) {
        return this.addHandler(handler, VyperTreeNodeChangeEvent.TYPE);
    }

    public CategoryDTO getSelectedNode() {
        return selectedNode;
    }
}
