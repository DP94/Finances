package com.vypersw.finances.client.lists;

import com.gwtplatform.mvp.client.UiHandlers;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.GridDoubleClickEvent;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.client.widget.VyperDataGrid;
import com.vypersw.finances.dto.VyperDTO;

import java.util.List;

public abstract class VyperListView<T extends VyperDTO, H extends UiHandlers, D extends AbstractDataProvider<T>> extends ViewWithUiHandlers<H>
        implements VyperListPresenter.MyView<H, T, D>, GridDoubleClickEvent.GridDoubleClickEventHandler, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {

    protected VyperDataGrid<T> vyperDataGrid;
    protected D dataProvider;

    public VyperListView() {

    }

    @Override
    public void init(D dataProvider) {
        this.dataProvider = dataProvider;
        vyperDataGrid = new VyperDataGrid<>();
        initWidget(vyperDataGrid);
        vyperDataGrid.setAbstractDataProvider(dataProvider);
        vyperDataGrid.addGridDoubleClickEventHandlers(this);
        vyperDataGrid.buildTable();
        vyperDataGrid.getToolbar().addToolbarButtonClickedHandler(this);
    }

    @Override
    public void setTableData(List<T> tableData) {
        dataProvider.getList().clear();
        for (T t : tableData) {
            dataProvider.getList().add(t);
        }
        dataProvider.flush();
        vyperDataGrid.getPagination().rebuild(vyperDataGrid.getSimplePager());
    }
}
