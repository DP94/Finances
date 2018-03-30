package com.vypersw.finances.client.transaction;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.TreeItem;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.vypersw.finances.client.widget.Toolbar;
import com.vypersw.finances.client.widget.ToolbarButtonClickedEvent;
import com.vypersw.finances.dto.CategoryDTO;
import com.vypersw.finances.dto.TransactionDTO;
import com.vypersw.finances.dto.user.AccountDTO;
import com.vypersw.finances.enumeration.AccountType;
import com.vypersw.finances.enumeration.TransactionType;
import org.gwtbootstrap3.client.ui.Label;
import org.gwtbootstrap3.client.ui.ListBox;
import org.gwtbootstrap3.client.ui.TextBox;
import org.gwtbootstrap3.client.ui.constants.LabelType;
import org.gwtbootstrap3.client.ui.html.Div;
import org.gwtbootstrap3.extras.datepicker.client.ui.DatePicker;
import org.moxieapps.gwt.highcharts.client.Chart;
import org.moxieapps.gwt.highcharts.client.Series;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TransactionFormView extends ViewWithUiHandlers<TransactionFormUiHandlers> implements TransactionFormPresenter.MyView, ToolbarButtonClickedEvent.ToolbarButtonClickedHandler {

    interface Binder extends UiBinder<Widget, TransactionFormView> {
    }

    @UiField
    ListBox account;

    @UiField
    ListBox transactionType;

    @UiField
    TextBox amount;

    @UiField
    TextBox description;

    @UiField
    Toolbar toolbar;

    @UiField
    DatePicker date;

    @UiField
    Tree categoryTree;

    @UiField
    Label amountLabel;

    @UiField
    Div chartContainer;

    private Map<Long, AccountDTO> accountDTOMap = new HashMap<>();

    @Inject
    public TransactionFormView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
        account.addChangeHandler(changeEvent -> {
            AccountDTO accountDTO = new AccountDTO();
            accountDTO.setAccountId(Long.valueOf(account.getSelectedValue()));
            getUiHandlers().getData().setAccountDTO(accountDTO);
            buildAccountChart(accountDTOMap.get(accountDTO.getAccountId()));
        });
        transactionType.addChangeHandler(changeEvent -> getUiHandlers().getData().setTransactionType(TransactionType.valueOf(transactionType.getSelectedValue())));
        amount.addValueChangeHandler(valueChangeHandler -> {
            getUiHandlers().getData().setAmount(new BigDecimal(amount.getValue()));
            Long accountId = Long.valueOf(account.getSelectedValue());
            if (transactionType.getSelectedValue().equals(String.valueOf(TransactionType.EXPENSE.name()))) {
                amountLabel.setType(LabelType.DANGER);
                amountLabel.setText("The account's balance after this expense will be: " + (accountDTOMap.get(accountId).getBalance().doubleValue() - (new BigDecimal(amount.getText()).doubleValue())));
            } else {
                amountLabel.setType(LabelType.SUCCESS);
                amountLabel.setText("The account's balance after this income will be: " + (accountDTOMap.get(accountId).getBalance().doubleValue() + (new BigDecimal(amount.getText()).doubleValue())));
            }
        });
        description.addValueChangeHandler(event -> getUiHandlers().getData().setDescription(description.getValue()));
        toolbar.addToolbarButtonClickedHandler(this);
        date.addChangeDateHandler(changeDateEvent -> getUiHandlers().getData().setDate(date.getValue()));
        toolbar.getDelete().removeFromParent();
        toolbar.getEdit().removeFromParent();
    }

    @Override
    public void setViewData(List<AccountDTO> accountDTOList) {
        account.addItem("", "0");
        for (AccountDTO accountDTO : accountDTOList) {
            account.addItem(accountDTO.getName(), String.valueOf(accountDTO.getAccountId()));
            accountDTOMap.put(accountDTO.getAccountId(), accountDTO);
        }
        for (TransactionType type : TransactionType.values()) {
            transactionType.addItem(type.name());
        }
        toolbar.getCreate().removeFromParent();
    }

    @Override
    public void clearView() {
        amount.setText("");
        description.setText("");
    }

    @Override
    public void buildCategoriesTree(List<CategoryDTO> categoryDTOSet) {
        for (CategoryDTO categoryDTO : categoryDTOSet) {
            TreeItem treeItem = new TreeItem();
            treeItem.setText(categoryDTO.getName());
            for (CategoryDTO child : categoryDTO.getChildCategories()) {
                TreeItem treeItem1 = new TreeItem();
                treeItem1.setText(child.getName());
                treeItem.addItem(treeItem1);
            }
            categoryTree.addItem(treeItem);
        }
    }

    @Override
    public void buildTransactionData(TransactionDTO transactionDTO) {
        if (transactionDTO != null) {
            for (int i = 0; i < account.getItemCount(); i++) {
                String s = account.getValue(i);
                if (s.equals(String.valueOf(transactionDTO.getAccountDTO().getAccountId()))) {
                    account.setSelectedIndex(i);
                    break;
                }
            }
            for (int i = 0; i < transactionType.getItemCount(); i++) {
                String s = transactionType.getValue(i);
                if (s.equals(String.valueOf(transactionDTO.getTransactionType().name()))) {
                    transactionType.setSelectedIndex(i);
                    break;
                }
            }
            amount.setText(transactionDTO.getAmount().toString());
            description.setText(transactionDTO.getDescription());
            date.setValue(transactionDTO.getDate());
        }
    }

    @Override
    public void onToolbarButtonClicked(ToolbarButtonClickedEvent event) {
        if (event.getEventType() == ToolbarButtonClickedEvent.ToolbarEventType.SAVE) {
            getUiHandlers().save();
        } else {
            getUiHandlers().refresh();
        }
    }

    private void buildAccountChart(AccountDTO accountDTO) {
        if (accountDTO.getAccountType() == AccountType.SAVINGS || accountDTO.getAccountType() == AccountType.ISA) {
            chartContainer.clear();
            Chart chart = new Chart()
                    .setType(Series.Type.SPLINE)
                    .setChartTitleText(accountDTO.getName())
                    .setMarginRight(10);
            Series series = chart.createSeries()
                    .setName("Account transactions")
                    .setPoints(buildPoints(accountDTO));
            chart.addSeries(series);
            chartContainer.add(chart);
        }
    }

    private Number[] buildPoints(AccountDTO accountDTO) {
        Number[] numbers = new Number[accountDTO.getTransactions().size()];
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = accountDTO.getTransactions().get(i).getAmount().intValue();
        }
        return numbers;
    }
}
