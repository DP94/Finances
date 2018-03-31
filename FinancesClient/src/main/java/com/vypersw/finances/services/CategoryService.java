package com.vypersw.finances.services;

import com.vypersw.finances.dto.CategoryDTO;

import java.util.ArrayList;

public interface CategoryService {
    ArrayList<CategoryDTO> getAllCategories();
    void delete(long categoryId);
    void create(CategoryDTO categoryDTO);
}
