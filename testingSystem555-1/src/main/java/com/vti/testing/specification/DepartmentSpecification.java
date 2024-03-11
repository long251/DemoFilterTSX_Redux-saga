package com.vti.testing.specification;

import com.vti.testing.entity.Department;
import com.vti.testing.form.DepartmentFilterForm;
import jakarta.persistence.criteria.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.jpa.domain.Specification;

public class DepartmentSpecification {
    private static final String SEARCH = "search";
    private static final String CREATED_DATE = "createdDate";
    private static final String MIN_YEAR = "minYear";
    private static final String MAX_YEAR = "maxYear";
    public static Specification<Department> buildWhere(DepartmentFilterForm form){
        if (form==null){
            return null;
        }
    Specification<Department> whereS = new CustomSpecification(SEARCH, form.getSearch());
        Specification<Department> whereDate = new CustomSpecification(CREATED_DATE, form.getCreatedDate());
        Specification<Department> whereMinDate = new CustomSpecification(MIN_YEAR, form.getMinYear());
        Specification<Department> whereMaxDate = new CustomSpecification(MAX_YEAR, form.getMaxYear());
    return Specification.where(whereS).and(whereDate).and(whereMinDate.and(whereMaxDate));
    }
  
    static class CustomSpecification implements Specification<Department>{

        private String key;
        private Object value;

        public CustomSpecification(String key, Object value) {
            this.key = key;
            this.value = value;
        }

        public String getKey() {
            return key;
        }

        public void setKey(String key) {
            this.key = key;
        }

        public Object getValue() {
            return value;
        }

        public void setValue(Object value) {
            this.value = value;
        }

        @Override
        public Predicate toPredicate(Root<Department> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (value == null){
                return null;
            }
//            if(key.equals(SEARCH)){
//                //where username LIKE %value%
//                return criteriaBuilder.like(root.get("name"), "%"+value+"%");
//
//            }
            switch (key){
                case SEARCH:
                    Join join = root.join("accounts", JoinType.LEFT);
                    return query.distinct(true).where(criteriaBuilder.like(join.get("username"), "%"+value+"%")).getRestriction();
                case CREATED_DATE:
                    return criteriaBuilder.equal(root.get("createdDate").as(java.sql.Date.class), value);
                case MIN_YEAR:
                    return criteriaBuilder.greaterThanOrEqualTo(criteriaBuilder.function("year", Integer.class, root.get("createdDate")),
                            (Integer) value);
                case MAX_YEAR:
                    return criteriaBuilder.lessThanOrEqualTo(criteriaBuilder.function("year", Integer.class, root.get("createdDate")), (Integer) value);
            }
            return null;
        }
    }
}
