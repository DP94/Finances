package com.vypersw.finances.client.lists.account;

import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountDataProvider;
import com.vypersw.finances.client.lists.VyperListView;
import com.vypersw.finances.client.widget.GridDoubleClickEvent;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.dto.user.AccountDTO;

public class AccountManagementListView extends VyperListView<AccountDTO, AccountManagementListUiHandlers, AccountDataProvider> implements GridDoubleClickEvent.GridDoubleClickEventHandler, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {

    public AccountManagementListView() {
    }

    @Override
    public void init(AccountDataProvider dataProvider) {
        super.init(dataProvider);
        vyperDataGrid.getToolbar().getSave().removeFromParent();
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
}