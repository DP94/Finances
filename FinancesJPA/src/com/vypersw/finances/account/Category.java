package com.vypersw.finances.account;

import com.vypersw.finances.VyperJPA;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "TBL_CATEGORY")
public class Category implements VyperJPA {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "CATEGORY_NAME")
    private String name;

    @ManyToOne
    @JoinColumn(name = "PARENT_CATEGORY_ID")
    private Category parentCategory;

    @OneToMany(mappedBy = "parentCategory")
    private Set<Category> childCategories;

    public Category() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }

    public Set<Category> getChildCategories() {
        return childCategories;
    }

    public void setChildCategories(Set<Category> childCategories) {
        this.childCategories = childCategories;
    }
}
