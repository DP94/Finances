package com.vypersw.finances.client.lists;

import com.google.gwt.view.client.ListDataProvider;
import com.vypersw.finances.dto.VyperDTO;

public abstract class AbstractDataProvider<T extends VyperDTO> extends ListDataProvider<T> {

    public static final int STRING = 1;
    public static final int DATE = 2;

    public abstract int getColumnCount();
    public abstract String getValueForColumn(final int i);
    public abstract String getStringValue(T t, int i);

    public abstract int getColumnType(int i);
}
