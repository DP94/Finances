package com.vypersw.finances.client.application;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.vypersw.finances.client.perspective.PerspectivePresenter;
import com.vypersw.finances.client.perspective.PerspectiveView;

public class ApplicationModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(ApplicationPresenter.class, ApplicationPresenter.MyView.class, ApplicationView.class, ApplicationPresenter.MyProxy.class);
        bindPresenterWidget(PerspectivePresenter.class, PerspectivePresenter.MyView.class, PerspectiveView.class);
        //bindPresenterWidget(AddExpensePresenter.class, AddExpensePresenter.MyView.class, AddExpenseView.class);
    }
}