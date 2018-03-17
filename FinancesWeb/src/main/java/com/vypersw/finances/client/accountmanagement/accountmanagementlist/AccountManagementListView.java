package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.BrowserEvents;
import com.google.gwt.dom.client.TableRowElement;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.AbstractCellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.view.client.CellPreviewEvent;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.RangeChangeEvent;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.AccountWidget;
import com.vypersw.finances.dto.user.AccountDTO;
import org.gwtbootstrap3.client.ui.Pagination;
import org.gwtbootstrap3.client.ui.constants.ButtonType;
import org.gwtbootstrap3.client.ui.constants.IconType;
import org.gwtbootstrap3.client.ui.gwt.ButtonCell;
import org.gwtbootstrap3.client.ui.gwt.DataGrid;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

public class AccountManagementListView extends ViewWithUiHandlers<AccountManagementListUiHandlers> implements AccountManagementListPresenter.MyView {
    public interface Binder extends UiBinder<Widget, AccountManagementListView> {
    }
    
    private List<AccountWidget> widgets;

    @UiField
    DataGrid<AccountDTO> dataGrid = new DataGrid<>(10);
    @UiField
    Pagination dataGridPagination;

    private SimplePager dataGridPager = new SimplePager();
    private ListDataProvider<AccountDTO> dataGridProvider = new ListDataProvider<AccountDTO>();

    @Inject
    public AccountManagementListView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        widgets = new ArrayList<>();

    }

    private void initTable(final AbstractCellTable<AccountDTO> grid, final SimplePager pager, final Pagination pagination, final ListDataProvider<AccountDTO> dataProvider) {

        final Column<AccountDTO, Boolean> checkbox = new Column<AccountDTO, Boolean>(new CheckboxCell()) {
            @Override
            public Boolean getValue(AccountDTO accountDTO) {
                return null;
            }
        };
        checkbox.setFieldUpdater((i, s, s2) -> Window.alert("Selected"));
        checkbox.setCellStyleNames("grid-cell-checkbox");
        grid.addColumn(checkbox, "");
        grid.getHeader(0).setHeaderStyleNames("grid-header-checkbox");
        final TextColumn<AccountDTO> accountName = new TextColumn<AccountDTO>() {
            @Override
            public String getValue(AccountDTO o) {
                return o.getName();
            }
        };
        grid.addColumn(accountName, "Account name");

        final TextColumn<AccountDTO> accountDescription = new TextColumn<AccountDTO>() {
            @Override
            public String getValue(AccountDTO accountDTO) {
                return accountDTO.getDescription();
            }
        };
        grid.addColumn(accountDescription, "Account description");

        final TextColumn<AccountDTO> accountType = new TextColumn<AccountDTO>() {

            @Override
            public String getValue(AccountDTO accountDTO) {
                return accountDTO.getAccountType().name();
            }
        };
        grid.addColumn(accountType, "Account type");

        grid.addRangeChangeHandler(event -> pagination.rebuild(pager));

        grid.addDomHandler(doubleClickEvent -> {
            DataGrid<?> dataGrid = (DataGrid<?>) doubleClickEvent.getSource();
            AccountDTO accountDTO = grid.getVisibleItem(dataGrid.getKeyboardSelectedRow());
            getUiHandlers().onEditPressed(accountDTO.getAccountId());
        }, DoubleClickEvent.getType());
        pager.setDisplay(grid);
        pagination.clear();
        dataProvider.addDataDisplay(grid);
    }
    
	@Override
	public void setAccountData(List<AccountDTO> accountList) {
        initTable(dataGrid, dataGridPager, dataGridPagination, dataGridProvider);
        for (AccountDTO accountDTO : accountList) {
            dataGridProvider.getList().add(accountDTO);
        }
        dataGridProvider.flush();
        dataGridPagination.rebuild(dataGridPager);
	}

    @Override
    public List<AccountWidget> getAllAccounts() {
        return widgets;
    }

}