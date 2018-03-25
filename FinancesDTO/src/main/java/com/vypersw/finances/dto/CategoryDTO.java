package com.vypersw.finances.dto;

import java.util.HashSet;
import java.util.Set;

public class CategoryDTO extends VyperDTO {
    private Long id;
    private Long parentCategory;
    private Set<CategoryDTO> childCategories = new HashSet<>();
    private String name;

    public CategoryDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Long parentCategory) {
        this.parentCategory = parentCategory;
    }

    public Set<CategoryDTO> getChildCategories() {
        return childCategories;
    }

    public void setChildCategories(Set<CategoryDTO> childCategories) {
        this.childCategories = childCategories;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
