package com.vti.testing.service;

import com.vti.testing.entity.Department;
import com.vti.testing.form.DepartmentFilterForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IDepartmentService {
    Page<Department> getAllDepartments(Pageable pageable, DepartmentFilterForm form);
    //demo
    List<Department> gg();
    Department getDepartmentById(int id);
    //search theo tên LIKE:
    List<Department> getDepartmentByNameContaining(String name);
    //demo phân trang:
    Page<Department> getAllDepartmentsPage(Pageable pageable);
}
