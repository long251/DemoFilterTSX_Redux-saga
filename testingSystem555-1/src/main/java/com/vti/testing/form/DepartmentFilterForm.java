package com.vti.testing.form;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;


public class DepartmentFilterForm {
    private String search;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdDate;
    private Integer MinYear;
    private Integer MaxYear;

    public DepartmentFilterForm() {
    }

    public DepartmentFilterForm(String search, Date createdDate) {
        this.search = search;
        this.createdDate = createdDate;
    }

    public DepartmentFilterForm(Integer minYear, Integer maxYear) {
        MinYear = minYear;
        MaxYear = maxYear;
    }

    public Integer getMinYear() {
        return MinYear;
    }

    public void setMinYear(Integer minYear) {
        MinYear = minYear;
    }

    public Integer getMaxYear() {
        return MaxYear;
    }

    public void setMaxYear(Integer maxYear) {
        MaxYear = maxYear;
    }

    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}
