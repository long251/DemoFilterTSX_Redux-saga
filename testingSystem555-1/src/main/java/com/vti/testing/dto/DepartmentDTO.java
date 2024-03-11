package com.vti.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.testing.entity.Type;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
//Lỗi Lombok

public class DepartmentDTO {
    private int id;
    private String name;
    private int totalMember;
    private Type type;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date createdDate;

    private List<AccountDTO> accounts;

    static class AccountDTO{
        private int id;
        private String username;

        public AccountDTO() {
        }

        public AccountDTO(int id, String username) {
            this.id = id;
            this.username = username;
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
    }
    public DepartmentDTO() {
    }

    public DepartmentDTO(int id, String name, int totalMember, Type type, Date createdDate) {
        this.id = id;
        this.name = name;
        this.totalMember = totalMember;
        this.type = type;
        this.createdDate = createdDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTotalMember() {
        return totalMember;
    }

    public void setTotalMember(int totalMember) {
        this.totalMember = totalMember;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}
