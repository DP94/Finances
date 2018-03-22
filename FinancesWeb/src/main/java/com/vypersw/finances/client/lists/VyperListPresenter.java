package com.vypersw.finances.client.lists;

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.UiHandlers;
import com.gwtplatform.mvp.client.View;
import com.vypersw.finances.client.abstractpresenter.VyperPresenterWidget;
import com.vypersw.finances.client.application.ApplicationPresenter;
import com.vypersw.finances.dto.VyperDTO;

import java.util.List;

public class VyperListPresenter<T extends VyperDTO, H extends UiHandlers, D extends AbstractDataProvider<T>> extends VyperPresenterWidget<VyperListPresenter.MyView> {

    public interface MyView<H extends UiHandlers, T extends VyperDTO, D extends AbstractDataProvider<T>> extends View, HasUiHandlers<H> {
        void init(D dataProvider);

        void setTableData(List<T> tableData);
    }

    public VyperListPresenter(EventBus eventBus, MyView view, D dataProvider, ApplicationPresenter container) {
		super(eventBus, view, container);
        getView().setUiHandlers((H) this);
        getView().init(dataProvider);
	}
}
