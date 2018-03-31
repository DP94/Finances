package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.CategoryResult;
import com.vypersw.finances.dto.CategoryDTO;

public class CategoryAction extends VyperAction<CategoryResult> {
    private boolean isCreate;
    private CategoryDTO categoryDTO;

    public CategoryAction() {
    }

    public boolean isCreate() {
        return isCreate;
    }

    public void setCreate(boolean create) {
        isCreate = create;
    }

    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }

    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }
}
