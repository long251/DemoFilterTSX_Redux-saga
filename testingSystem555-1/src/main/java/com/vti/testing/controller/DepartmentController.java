package com.vti.testing.controller;

import com.vti.testing.dto.DepartmentDTO;
import com.vti.testing.entity.Department;
import com.vti.testing.form.DepartmentFilterForm;
import com.vti.testing.service.IDepartmentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/departments")
@CrossOrigin("*")
public class DepartmentController {
    @Autowired
    private IDepartmentService departmentService;
    @Autowired
    private ModelMapper modelMapper;
    @GetMapping
    public Page<DepartmentDTO> getAllDepartment(Pageable pageable, DepartmentFilterForm form){
        Page<Department> departmentsPage = departmentService.getAllDepartments(pageable, form);
        List<Department> departmentsList = departmentsPage.getContent();
        List<DepartmentDTO> departmentDTOS = modelMapper.map(departmentsList, new TypeToken<List<DepartmentDTO>>(){}.getType());
        return new PageImpl<>(departmentDTOS, pageable, departmentsPage.getTotalElements());
    }
    //demo
//    @GetMapping(value = "/gg")
//    public  List<Department> gg(){
//        return   modelMapper.map(departmentService.gg(), new TypeToken<List<DepartmentDTO>>(){}.getType());
//    }
//    @GetMapping(value = "/gg")
//    public List<DepartmentDTO> gg(){
//        List<Department> departments = departmentService.gg();
//        return modelMapper.map(departments, new TypeToken<List<DepartmentDTO>>(){}.getType());
//    }
    //chuyển hàm từ De -> DeDTO mới
    @GetMapping(value = "/{id}")
    public DepartmentDTO getDepartmentById(@PathVariable(name="id")int id){
        Department department =  departmentService.getDepartmentById(id);
       return modelMapper.map(department, DepartmentDTO.class);
    }
    //search theo tên LIKE
    @GetMapping(value = "/name/{name}")
    public List<Department> getDepartmentsByNameContaining(@PathVariable(name="name")String name){
       return departmentService.getDepartmentByNameContaining(name);
    }
    //list Department Page
//    @GetMapping
//    public Page<Department> getAllDepartmentsPage(Pageable pageable){
//        return departmentService.getAllDepartmentsPage(pageable);
//    }
}
