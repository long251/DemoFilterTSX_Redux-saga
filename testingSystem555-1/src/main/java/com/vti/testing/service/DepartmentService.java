package com.vti.testing.service;

import com.vti.testing.entity.Department;
import com.vti.testing.form.DepartmentFilterForm;
import com.vti.testing.repository.IDepartmentRepository;
import com.vti.testing.specification.DepartmentSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService implements IDepartmentService{

    @Autowired
    private IDepartmentRepository departmentRepository;
    @Override
    public Page<Department> getAllDepartments(Pageable pageable, DepartmentFilterForm form) {
        Specification<Department> where = DepartmentSpecification.buildWhere(form);
        return departmentRepository.findAll(where, pageable);
    }
    //demo
    @Override
    public List<Department> gg() {
        return departmentRepository.findAll();
    }
    @Override
    public Department getDepartmentById(int id) {
        return departmentRepository.findById(id).get();
    }


    //search theo tên LIKE
    @Override
    public List<Department> getDepartmentByNameContaining(String name) {
        return departmentRepository.findByNameContaining(name);
    }
    //list Department Page
    @Override
    public Page<Department> getAllDepartmentsPage(Pageable pageable) {
        return departmentRepository.findAll(pageable);
    }
}
