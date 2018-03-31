package com.vypersw.finances.client.widget;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.HasHandlers;
import com.vypersw.finances.dto.CategoryDTO;

public class VyperTreeNodeChangeEvent extends GwtEvent<VyperTreeNodeChangeEvent.VyperTreeNodeChangeEventHandler> {

    public static Type<VyperTreeNodeChangeEventHandler> TYPE = new Type<>();

    public interface  VyperTreeNodeChangeEventHandler extends EventHandler {
        void onTreeNodeChange(VyperTreeNodeChangeEvent event);
    }

    public interface  HasVyperTreeNodeChangeEventHandlers extends HasHandlers {
        HandlerRegistration addVyperTreeNodeChangeEventHandlers(VyperTreeNodeChangeEventHandler handler);
    }

    private CategoryDTO changeItem;
    private boolean create;

    public VyperTreeNodeChangeEvent() {
    }

    public VyperTreeNodeChangeEvent(CategoryDTO changeItem, boolean create) {
        this.changeItem = changeItem;
        this.create = create;
    }

    @Override
    public Type<VyperTreeNodeChangeEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(VyperTreeNodeChangeEventHandler handler) {
        handler.onTreeNodeChange(this);
    }

    public static void fire(CategoryDTO categoryDTO, boolean create, HasHandlers source) {
        source.fireEvent(new VyperTreeNodeChangeEvent(categoryDTO, create));
    }

    public CategoryDTO getChangeItem() {
        return changeItem;
    }

    public boolean isCreate() {
        return create;
    }
}
