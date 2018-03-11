package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperListPresenter;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.client.widget.AccountWidget;
import com.vypersw.finances.dto.user.AccountDTO;

import java.util.List;

public class AccountManagementListPresenter extends VyperListPresenter<AccountManagementListPresenter.MyView> implements AccountManagementListUiHandlers {
    public interface MyView extends View , HasUiHandlers<AccountManagementListUiHandlers> {
    	void setAccountData(List<AccountDTO> dto);

        List<AccountWidget> getAllAccounts();

        AccountWidget getSelectedAccount();
    }

	@Inject
	public AccountManagementListPresenter(EventBus eventBus, MyView view, ApplicationPresenter container) {
		super(eventBus, view, container);
		getView().setUiHandlers(this);
		getView().setAccountData(getContainer().getUserDTO().getAccounts());
	}

	@Override
	public String getCurrencySymbol() {
		return getContainer().getUserDTO().getCurrencyDTO().getCurrencyCode();
	}

    @Override
    protected void onReveal() {
        for (AccountWidget accountWidget : getView().getAllAccounts()) {
            accountWidget.animate("progress" + accountWidget.getId(), accountWidget.getPercentage());
        }
    }
}