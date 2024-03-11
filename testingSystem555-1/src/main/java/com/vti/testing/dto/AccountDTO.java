package com.vti.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.testing.entity.Gender;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

public class AccountDTO {
    private int id;
    private String username;
    private String departmentName;

    private Gender gender;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date createdDate;

    public AccountDTO() {
    }

    public AccountDTO(int id, String username, String departmentName, Gender gender, Date createdDate) {
        this.id = id;
        this.username = username;
        this.departmentName = departmentName;
        this.gender = gender;
        this.createdDate = createdDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}
