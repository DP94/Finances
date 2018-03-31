package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.CategoryAction;
import com.vypersw.finances.client.results.CategoryResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.CategoryService;

public class CategoryActionHandler extends VyperActionHandler<CategoryAction, CategoryResult> {

    private final CategoryService categoryService = LocalEJBServiceLocator.getInstance().getCategoryService();

    @Override
    protected CategoryResult executeAction(CategoryAction action) {
        if (action.isCreate()) {
            categoryService.create(action.getCategoryDTO());
        }
        return new CategoryResult();
    }
}
