package com.vti.testing.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name="`Account`")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, nullable = false, unique = true)
    private String username;


    @Column(name="created_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdDate;
    //nhiều acc trong 1 phòng ban -> ManyToOne
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;

    public Account() {
    }

    public Account(int id, String username, Date createdDate, Department department, Gender gender) {
        this.id = id;
        this.username = username;
        this.createdDate = createdDate;
        this.department = department;
        this.gender = gender;
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

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }
}
