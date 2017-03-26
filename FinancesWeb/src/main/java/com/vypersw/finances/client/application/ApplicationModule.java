package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.vypersw.finances.client.content.ContentPresenter;
import com.vypersw.finances.client.content.ContentView;

public class ApplicationModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(ApplicationPresenter.class, ApplicationPresenter.MyView.class, ApplicationView.class, ApplicationPresenter.MyProxy.class);
        bindPresenterWidget(ContentPresenter.class, ContentPresenter.MyView.class, ContentView.class);
        //bindPresenterWidget(AddExpensePresenter.class, AddExpensePresenter.MyView.class, AddExpenseView.class);
    }
}