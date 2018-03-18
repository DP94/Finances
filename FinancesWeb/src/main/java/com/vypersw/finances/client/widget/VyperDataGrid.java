package com.vypersw.finances.client.widget;

import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.vypersw.finances.client.abstractpresenter.lists.AbstractDataProvider;
import com.vypersw.finances.dto.VyperDTO;
import org.gwtbootstrap3.client.ui.Pagination;
import org.gwtbootstrap3.client.ui.gwt.DataGrid;

public class VyperDataGrid<T extends VyperDTO> extends Composite implements GridDoubleClickEvent.HasGridDoubleClickEventHandlers {

    private static VyperDataGrid.Binder binder = GWT.create(VyperDataGrid.Binder.class);
    interface Binder extends UiBinder<Widget, VyperDataGrid> {}


    @UiField
    DataGrid<T> dataGrid = new DataGrid<>(10);

    @UiField
    Pagination pagination;

    private SimplePager simplePager = new SimplePager();
    private AbstractDataProvider<T> abstractDataProvider;

    public VyperDataGrid() {
        initWidget(binder.createAndBindUi(this));
    }

    public void buildTable() {
        int columnCount = abstractDataProvider.getColumnCount();
        final Column<T, Boolean> checkbox = new Column<T, Boolean>(new CheckboxCell()) {
            @Override
            public Boolean getValue(T t) {
                return null;
            }
        };
        checkbox.setCellStyleNames("grid-cell-checkbox");
        dataGrid.addColumn(checkbox, "");
        dataGrid.getHeader(0).setHeaderStyleNames("grid-header-checkbox");
        for (int i = 0; i < columnCount; i++) {
            final int index = i;
            final TextColumn<T> accountDescription = new TextColumn<T>() {
                @Override
                public String getValue(T accountDTO) {
                    return abstractDataProvider.getStringValue(accountDTO, index);
                }
            };
            dataGrid.addColumn(accountDescription, abstractDataProvider.getValueForColumn(i));
        }

        dataGrid.addDomHandler(doubleClickEvent -> {
            DataGrid<T> dataGrid = (DataGrid<T>) doubleClickEvent.getSource();
            new GridDoubleClickEvent<>().fire(dataGrid.getVisibleItem(dataGrid.getKeyboardSelectedRow()), this);
        }, DoubleClickEvent.getType());

        simplePager.setDisplay(dataGrid);
        pagination.clear();
        abstractDataProvider.addDataDisplay(dataGrid);
    }

    public void setAbstractDataProvider(AbstractDataProvider<T> abstractDataProvider) {
        this.abstractDataProvider = abstractDataProvider;
    }

    @Override
    public HandlerRegistration addGridDoubleClickEventHandlers(GridDoubleClickEvent.GridDoubleClickEventHandler handler) {
        return this.addHandler(handler, GridDoubleClickEvent.TYPE);
    }
}
