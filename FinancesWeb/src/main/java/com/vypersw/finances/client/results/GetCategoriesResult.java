package com.vypersw.finances.client.results;

import com.vypersw.finances.dto.CategoryDTO;

import java.util.ArrayList;

public class GetCategoriesResult extends VyperActionResult {
    private ArrayList<CategoryDTO> categoryDTOS;

    public GetCategoriesResult() {
    }

    public ArrayList<CategoryDTO> getCategoryDTOS() {
        return categoryDTOS;
    }

    public void setCategoryDTOS(ArrayList<CategoryDTO> categoryDTOS) {
        this.categoryDTOS = categoryDTOS;
    }
}
