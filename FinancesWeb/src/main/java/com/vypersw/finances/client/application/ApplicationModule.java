package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountEditorPresenter;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountEditorView;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountTransferPresenter;
import com.vypersw.finances.client.accountmanagement.accountmanagementlist.AccountTransferView;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.content.ContentContainerView;
import com.vypersw.finances.client.lists.account.AccountManagementListPresenter;
import com.vypersw.finances.client.lists.account.AccountManagementListView;
import com.vypersw.finances.client.transaction.TransactionFormPresenter;
import com.vypersw.finances.client.transaction.TransactionFormView;
import com.vypersw.finances.client.usermanagement.usermanagementform.UserManagementFormPresenter;
import com.vypersw.finances.client.usermanagement.usermanagementform.UserManagementFormView;

public class ApplicationModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(ApplicationPresenter.class, ApplicationPresenter.MyView.class, ApplicationView.class, ApplicationPresenter.MyProxy.class);
        bindPresenterWidget(ContentContainerPresenter.class, ContentContainerPresenter.MyView.class, ContentContainerView.class);
        bindPresenterWidget(UserManagementFormPresenter.class, UserManagementFormPresenter.MyView.class, UserManagementFormView.class);
        bindPresenterWidget(AccountManagementListPresenter.class, AccountManagementListPresenter.MyView.class, AccountManagementListView.class);
        bindPresenterWidget(AccountEditorPresenter.class, AccountEditorPresenter.MyView.class, AccountEditorView.class);
        bindPresenterWidget(TransactionFormPresenter.class, TransactionFormPresenter.MyView.class, TransactionFormView.class);
        bindPresenterWidget(AccountTransferPresenter.class, AccountTransferPresenter.MyView.class, AccountTransferView.class);
    }
}