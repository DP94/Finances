package com.vypersw.finances.beans;

import com.vypersw.finances.abstractbean.AbstractBean;
import com.vypersw.finances.account.Category;
import com.vypersw.finances.dto.CategoryDTO;
import com.vypersw.finances.jpahelpers.CategoryJPAHelper;
import com.vypersw.finances.services.CategoryService;

import javax.ejb.Local;
import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;

@Stateless
@Local(CategoryService.class)
public class CategoryBean extends AbstractBean implements CategoryService {

    @Override
    public ArrayList<CategoryDTO> getAllCategories() {
        CategoryJPAHelper categoryJPAHelper = new CategoryJPAHelper(entityManager);
        List<Category> categoryList = categoryJPAHelper.getAll(Category.class);
        categoryList.removeIf(s -> s.getParentCategory() != null);
        ArrayList<CategoryDTO> categories = new ArrayList<>();
        for (Category category : categoryList) {
            categories.add(getCategoryDTO(category));
        }
        return categories;
    }


    private CategoryDTO getCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        if (category.getParentCategory() != null) {
            categoryDTO.setParentCategory(category.getParentCategory().getId());
        }

        for (Category child : category.getChildCategories()) {
            categoryDTO.getChildCategories().add(getCategoryDTO(child));
        }
        return categoryDTO;
    }
}
