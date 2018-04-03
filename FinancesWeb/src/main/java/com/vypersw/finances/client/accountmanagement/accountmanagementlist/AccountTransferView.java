package com.vypersw.finances.client.accountmanagement.accountmanagementlist;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.AccountWidget;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.dto.user.AccountDTO;
import org.gwtbootstrap3.client.ui.TextBox;
import org.gwtbootstrap3.client.ui.html.Div;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountTransferView extends ViewWithUiHandlers<AccountTransferUIHandlers> implements AccountTransferPresenter.MyView, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {

    interface Binder extends UiBinder<Widget, AccountTransferView> {
    }

    @UiField
    ListBox sourceAccount;

    @UiField
    ListBox targetAccount;

    @UiField
    AccountWidget sourceAccountWidget;

    @UiField
    AccountWidget targetAccountWidget;

    @UiField
    Div sourceAccountDiv;

    @UiField
    Div targetAccountDiv;

    @UiField
    FlowPanel selectSourceAccount;

    @UiField
    FlowPanel selectTargetAccount;

    @UiField
    TextBox amount;

    @UiField
    Label switchAccount;

    @UiField
    Toolbar toolbar;

    private Map<Long, AccountDTO> accountDTOMap = new HashMap<>();

    @Inject
    public AccountTransferView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        toolbar.addToolbarButtonClickedHandler(this);
        toolbar.getCreate().removeFromParent();
        toolbar.getDelete().removeFromParent();
        toolbar.getEdit().removeFromParent();
        amount.setPlaceholder("Enter an amount");
        sourceAccount.addChangeHandler(changeEvent -> {
            long id = Long.valueOf(sourceAccount.getSelectedValue());
            if (id > 0) {
                selectSourceAccount.setVisible(false);
                sourceAccountDiv.setVisible(true);
                sourceAccountWidget.init(accountDTOMap.get(id));
            } else {
                sourceAccountDiv.setVisible(false);
                selectSourceAccount.setVisible(true);
            }
        });
        targetAccount.addChangeHandler(changeEvent -> {
            long id = Long.valueOf(targetAccount.getSelectedValue());
            if (id > 0) {
                selectTargetAccount.setVisible(false);
                targetAccountDiv.setVisible(true);
                targetAccountWidget.init(accountDTOMap.get(id));
            } else {
                targetAccountDiv.setVisible(false);
                selectTargetAccount.setVisible(true);
            }
        });
    }

    @Override
    public void setFormData(List<AccountDTO> accountDTOList, boolean refresh) {
        int currentSource = sourceAccount.getSelectedIndex();
        int currentTarget = targetAccount.getSelectedIndex();
        sourceAccount.clear();
        targetAccount.clear();
        sourceAccount.addItem("", "0");
        targetAccount.addItem("", "0");
        for (AccountDTO accountDTO : accountDTOList) {
            sourceAccount.addItem(accountDTO.getName(), String.valueOf(accountDTO.getAccountId()));
            targetAccount.addItem(accountDTO.getName(), String.valueOf(accountDTO.getAccountId()));
            accountDTOMap.put(accountDTO.getAccountId(), accountDTO);
        }
        if (currentSource > 0 && currentTarget > 0 && !refresh) {
            sourceAccount.setSelectedIndex(currentSource);
            targetAccount.setSelectedIndex(currentTarget);
            sourceAccountWidget.init(accountDTOMap.get(Long.valueOf(sourceAccount.getSelectedValue())));
            targetAccountWidget.init(accountDTOMap.get(Long.valueOf(targetAccount.getSelectedValue())));
        } else if (refresh) {
            sourceAccountDiv.setVisible(false);
            selectSourceAccount.setVisible(true);
            targetAccountDiv.setVisible(false);
            selectTargetAccount.setVisible(true);
        }
    }

    @UiHandler("switchAccount")
    public void onSwitchAccount(ClickEvent clickEvent) {
        long sourceId = Long.valueOf(sourceAccount.getSelectedValue());
        long targetId = Long.valueOf(targetAccount.getSelectedValue());
        if (sourceId != 0 && targetId != 0) {
            AccountDTO source = accountDTOMap.get(sourceId);
            AccountDTO target = accountDTOMap.get(targetId);
            if (source != null && target != null) {
                int i = sourceAccount.getSelectedIndex();
                int x = targetAccount.getSelectedIndex();
                sourceAccount.setSelectedIndex(x);
                targetAccount.setSelectedIndex(i);
                sourceAccountWidget.init(target);
                targetAccountWidget.init(source);
            }
        }
    }

    @Override
    public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
        switch (event.getEventType()) {
            case SAVE:
                getUiHandlers().save(sourceAccountWidget.getAccountDTO(), targetAccountWidget.getAccountDTO(), Long.valueOf(amount.getValue()));
                break;
            case REFRESH:
                getUiHandlers().refresh();
                break;
            default:
                break;
        }
    }
}
