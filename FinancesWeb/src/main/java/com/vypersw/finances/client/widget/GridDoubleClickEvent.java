package com.vypersw.finances.client.widget;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.HasHandlers;
import com.vypersw.finances.dto.VyperDTO;

public class GridDoubleClickEvent<T extends VyperDTO> extends GwtEvent<GridDoubleClickEvent.GridDoubleClickEventHandler> {

    public static Type<GridDoubleClickEventHandler> TYPE = new Type<>();

    public interface GridDoubleClickEventHandler extends EventHandler {
        void onGridDoubleClick(GridDoubleClickEvent event);
    }

    public interface HasGridDoubleClickEventHandlers extends HasHandlers {
        HandlerRegistration addGridDoubleClickEventHandlers(GridDoubleClickEventHandler handler);
    }

    private T currentRow;

    public GridDoubleClickEvent() {

    }

    public GridDoubleClickEvent(T currentRow) {
        this.currentRow = currentRow;
    }

    @Override
    public Type getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(GridDoubleClickEventHandler handler) {
        handler.onGridDoubleClick(this);
    }

    public void fire(T currentRow, HasHandlers source) {
        source.fireEvent(new GridDoubleClickEvent<T>(currentRow));
    }

    public T getCurrentRow() {
        return currentRow;
    }
}
