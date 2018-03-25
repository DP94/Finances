package com.vypersw.finances.services;

import com.vypersw.finances.dto.CategoryDTO;

import java.util.HashSet;

public interface CategoryService {
    HashSet<CategoryDTO> getAllCategories();
}
