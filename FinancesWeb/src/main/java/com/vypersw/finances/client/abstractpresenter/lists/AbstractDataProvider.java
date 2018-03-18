package com.vypersw.finances.client.abstractpresenter.lists;

import com.google.gwt.view.client.ListDataProvider;
import com.vypersw.finances.dto.VyperDTO;

public abstract class AbstractDataProvider<T extends VyperDTO> extends ListDataProvider<T> {

    public abstract int getColumnCount();
    public abstract String getValueForColumn(final int i);
    public abstract String getStringValue(T t, int i);
}
