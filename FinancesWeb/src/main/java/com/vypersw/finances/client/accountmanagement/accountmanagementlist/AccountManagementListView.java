package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import javax.inject.Inject;

import org.gwtbootstrap3.client.ui.gwt.DataGrid;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

public class AccountManagementListView extends ViewWithUiHandlers<AccountManagementListUiHandlers> implements AccountManagementListPresenter.MyView {
    public interface Binder extends UiBinder<Widget, AccountManagementListView> {
    }

    @UiField
    HTMLPanel main;
    
    @UiField
    DataGrid<String> dataGrid;

    @Inject
    public AccountManagementListView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        initGrid();
    }
    
    public void initGrid() {
    	TextColumn<String> column = new TextColumn<String>() {
    		public String getValue(String object) {
    			return "Test";
    		};
    	};
    	dataGrid.addColumn(column);
    }
    
}