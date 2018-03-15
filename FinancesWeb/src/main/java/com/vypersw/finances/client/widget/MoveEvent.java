package com.vypersw.finances.client.widget;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HasHandlers;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;

public class MoveEvent extends GwtEvent<MoveEvent.MoveEventHandler> {


    public interface MoveEventHandler extends EventHandler {
        void onMove(MoveEvent event);
    }

    public interface MoveEventHandlers extends HasHandlers {
        HandlerRegistration addMoveEvent(MoveEventHandler moveEventHandler);
    }

    public static final Type<MoveEventHandler> TYPE = new Type<>();

    private final PlaceRequest placeRequest;


    @Override
    protected void dispatch(MoveEventHandler handler) {
        handler.onMove(this);
    }

    @Override
    public Type<MoveEventHandler> getAssociatedType() {
        return TYPE;
    }


    public MoveEvent(PlaceRequest placeRequest) {
        this.placeRequest = placeRequest;
    }

    public PlaceRequest getPlaceRequest() {
        return placeRequest;
    }


}
