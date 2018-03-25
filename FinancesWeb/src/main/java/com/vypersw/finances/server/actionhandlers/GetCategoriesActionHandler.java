package com.vypersw.finances.server.actionhandlers;

import com.vypersw.finances.client.actions.GetCategoriesAction;
import com.vypersw.finances.client.results.GetCategoriesResult;
import com.vypersw.finances.login.bean.LocalEJBServiceLocator;
import com.vypersw.finances.services.CategoryService;

public class GetCategoriesActionHandler extends VyperActionHandler<GetCategoriesAction, GetCategoriesResult> {

    private CategoryService categoryService = LocalEJBServiceLocator.getInstance().getCategoryService();

    @Override
    protected GetCategoriesResult executeAction(GetCategoriesAction action) {
        GetCategoriesResult categoriesResult = new GetCategoriesResult();
        categoriesResult.setCategoryDTOS(categoryService.getAllCategories());
        return categoriesResult;
    }
}
