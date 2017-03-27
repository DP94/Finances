package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.vypersw.finances.client.content.ContentContainerPresenter;
import com.vypersw.finances.client.content.ContentContainerView;
import com.vypersw.finances.client.usermanagement.usermanagementform.UserManagementFormPresenter;
import com.vypersw.finances.client.usermanagement.usermanagementform.UserManagementFormView;

public class ApplicationModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(ApplicationPresenter.class, ApplicationPresenter.MyView.class, ApplicationView.class, ApplicationPresenter.MyProxy.class);
        bindPresenterWidget(ContentContainerPresenter.class, ContentContainerPresenter.MyView.class, ContentContainerView.class);
        bindPresenterWidget(UserManagementFormPresenter.class, UserManagementFormPresenter.MyView.class, UserManagementFormView.class);
    }
}