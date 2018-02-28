package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.MouseEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.AccountWidget;
import com.vypersw.finances.client.widget.ISAAccountWidget;
import com.vypersw.finances.client.widget.SavingsAccountWidget;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;

public class AccountManagementListView extends ViewWithUiHandlers<AccountManagementListUiHandlers> implements AccountManagementListPresenter.MyView {
    public interface Binder extends UiBinder<Widget, AccountManagementListView> {
    }
    
    private List<AccountWidget> widgets;
    private int currentIndex;

    @UiField
    HTMLPanel main;
    
    @UiField
    Label left;
    
    @UiField
    Label right;
    
    @Inject
    public AccountManagementListView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        widgets = new ArrayList<>();
        currentIndex = 0;
    } 
    
	@Override
	public void setAccountData(List<AccountDTO> accountList) {
		int i = 0;
		for (AccountDTO dto : accountList) {
			AccountWidget widget;
			if (dto.getAccountType() == AccountType.SAVINGS) {
				double percentage = dto.getBalance().doubleValue() / dto.getAccountBalanceTarget().doubleValue() * 100;
				widget = new SavingsAccountWidget(percentage);
			} else {
				widget = new ISAAccountWidget();
			}
			widget.setAccountBalance(dto.getBalance().toString());
			widget.setAccountName(dto.getName());
			widget.setID(dto.getAccountId().toString());
			if (i != 0) {
				widget.setVisible(false);
			}
			main.add(widget);
			widgets.add(widget);
			i++;
		}
	}
	
	@UiHandler("left")
	public void onLeftPress(ClickEvent e) {
		if (currentIndex == 0) {
			widgets.get(0).setVisible(false);
			widgets.get(widgets.size() - 1).setVisible(true);
			currentIndex = widgets.size() - 1;
		} else {
			widgets.get(currentIndex).setVisible(false);
			widgets.get(currentIndex - 1).setVisible(true);
			currentIndex--;
		}
	}
	
	@UiHandler("right")
	public void onRightPress(ClickEvent e) {
		if (currentIndex == widgets.size() - 1) {
			widgets.get(widgets.size() - 1).setVisible(false);
			widgets.get(0).setVisible(true);
			currentIndex = 0;
		} else {
			widgets.get(currentIndex).setVisible(false);
			widgets.get(currentIndex + 1).setVisible(true);
			currentIndex++;
		}
	}
}