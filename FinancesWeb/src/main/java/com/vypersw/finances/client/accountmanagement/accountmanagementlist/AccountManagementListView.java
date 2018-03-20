package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.GridDoubleClickEvent;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.client.widget.VyperDataGrid;
import com.vypersw.finances.dto.user.AccountDTO;

import javax.inject.Inject;
import java.util.List;

public class AccountManagementListView extends ViewWithUiHandlers<AccountManagementListUiHandlers> implements AccountManagementListPresenter.MyView, GridDoubleClickEvent.GridDoubleClickEventHandler, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {


    public interface Binder extends UiBinder<Widget, AccountManagementListView> {}

    @UiField
    public VyperDataGrid<AccountDTO> vyperDataGrid;

    @UiField
    public Toolbar toolbar;

    private AccountDataProvider dataGridProvider = new AccountDataProvider();

    @Inject
    public AccountManagementListView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        vyperDataGrid.setAbstractDataProvider(dataGridProvider);
        vyperDataGrid.addGridDoubleClickEventHandlers(this);
        toolbar.addToolbarButtonClickedHandler(this);
        vyperDataGrid.buildTable();
        toolbar.getSave().setEnabled(false);
    }
    
	@Override
	public void setAccountData(List<AccountDTO> accountList) {
        dataGridProvider.getList().clear();
        for (AccountDTO accountDTO : accountList) {
            dataGridProvider.getList().add(accountDTO);
        }
        dataGridProvider.flush();
        vyperDataGrid.getPagination().rebuild(vyperDataGrid.getSimplePager());
	}

    @Override
    public void onGridDoubleClick(GridDoubleClickEvent event) {
        AccountDTO accountDTO = (AccountDTO) event.getCurrentRow();
        getUiHandlers().onEditPressed(accountDTO.getAccountId());
    }

    @Override
    public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
        if (event.getEventType() == ToolbarButtonClickedEvent.ToolbarEventType.REFRESH) {
            getUiHandlers().refresh();
        } else if (event.getEventType() == ToolbarButtonClickedEvent.ToolbarEventType.CREATE) {
            getUiHandlers().onCreate();
        }
    }

    @Override
    public Toolbar getToolbar() {
        return toolbar;
    }
}