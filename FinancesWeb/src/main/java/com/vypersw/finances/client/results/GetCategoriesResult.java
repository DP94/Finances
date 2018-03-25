package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.CategoryDTO;

import java.util.HashSet;

public class GetCategoriesResult extends VyperActionResult {
    private HashSet<CategoryDTO> categoryDTOS;

    public GetCategoriesResult() {
    }

    public HashSet<CategoryDTO> getCategoryDTOS() {
        return categoryDTOS;
    }

    public void setCategoryDTOS(HashSet<CategoryDTO> categoryDTOS) {
        this.categoryDTOS = categoryDTOS;
    }
}
