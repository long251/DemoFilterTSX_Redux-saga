package com.vti.testing.form;

import com.vti.testing.entity.Gender;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class AccountFilterForm {
    private String search;
    private Integer minId;
    private Integer maxId;
    private String username;
    private String departmentName;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdDate;
    private Gender gender;

    private Integer MinYear;
    private Integer MaxYear;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date minDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date maxDate;

    public AccountFilterForm() {
    }

    public AccountFilterForm(String search, Integer minId, Integer maxId, String username, String departmentName, Date createdDate, Gender gender, Integer minYear, Integer maxYear, Date minDate, Date maxDate) {
        this.search = search;
        this.minId = minId;
        this.maxId = maxId;
        this.username = username;
        this.departmentName = departmentName;
        this.createdDate = createdDate;
        this.gender = gender;
        MinYear = minYear;
        MaxYear = maxYear;
        this.minDate = minDate;
        this.maxDate = maxDate;
    }

    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public Integer getMinId() {
        return minId;
    }

    public void setMinId(Integer minId) {
        this.minId = minId;
    }

    public Integer getMaxId() {
        return maxId;
    }

    public void setMaxId(Integer maxId) {
        this.maxId = maxId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
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

    public Date getMinDate() {
        return minDate;
    }

    public void setMinDate(Date minDate) {
        this.minDate = minDate;
    }

    public Date getMaxDate() {
        return maxDate;
    }

    public void setMaxDate(Date maxDate) {
        this.maxDate = maxDate;
    }
}

