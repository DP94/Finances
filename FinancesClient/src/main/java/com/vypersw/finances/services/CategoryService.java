package com.vypersw.finances.services;

import com.vypersw.finances.dto.CategoryDTO;

import java.util.ArrayList;

public interface CategoryService {
    ArrayList<CategoryDTO> getAllCategories();
}
