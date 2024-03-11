package com.vti.testing.specification;

import com.vti.testing.entity.Account;
import com.vti.testing.form.AccountFilterForm;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.Date;

public class AccountSpecification {
//    private static final String SEARCH = "search";
    private static final String MINID = "minId";
    private static final String MAXID = "maxId";
    private static final String USERNAME = "username";
    private static final String DEPARTMENT_NAME = "departmentName";
    private static final String CREATED_DATE = "createdDate";
    private static final String MIN_YEAR = "minYear";
    private static final String MAX_YEAR = "maxYear";
    private static final String GENDER = "gender";
    private static final String MIN_DATE = "minDate";
    private static final String MAX_DATE = "maxDate";
    public static Specification<Account> buildWhere(AccountFilterForm form){
        if (form==null){
            return null;
        }
//        Specification<Account> whereSearch = new CustomSpecification(SEARCH, form.getSearch());
        Specification<Account> whereUsername = new CustomSpecification(USERNAME, form.getUsername());
        Specification<Account> whereDepartmentName = new CustomSpecification(DEPARTMENT_NAME, form.getDepartmentName());
        Specification<Account> whereMinId = new CustomSpecification(MINID, form.getMinId());
        Specification<Account> whereMaxId = new CustomSpecification(MAXID, form.getMaxId());
        Specification<Account> whereDate = new CustomSpecification(CREATED_DATE, form.getCreatedDate());
        Specification<Account> whereMinDate = new CustomSpecification(MIN_YEAR, form.getMinYear());
        Specification<Account> whereMaxDate = new CustomSpecification(MAX_YEAR, form.getMaxYear());
        Specification<Account> whereGender = new CustomSpecification(GENDER, form.getGender());
        Specification<Account> whereMinDate1 = new CustomSpecification(MIN_DATE, form.getMinDate());
        Specification<Account> whereMaxDate1 = new CustomSpecification(MAX_DATE, form.getMaxDate());
        return Specification.where(whereUsername.and(whereDate).and(whereGender).and(whereMinDate1).and(whereMaxDate1));
    }
   static class CustomSpecification implements Specification<Account>{
        private String key;
        private Object value;

        public CustomSpecification() {
        }

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
        public Predicate toPredicate(Root<Account> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if(value==null){
                return null;
            }
            switch (key){
                case USERNAME:
                    return criteriaBuilder.like(root.get("username"), "%"+value+"%");
                case DEPARTMENT_NAME:
                    return criteriaBuilder.like(root.get("department").get("name"), "%"+value+"%");
                    case MINID:
                    return criteriaBuilder.greaterThanOrEqualTo(root.get("id"), value.toString());
                case MAXID:
                    return criteriaBuilder.lessThanOrEqualTo(root.get("id"), value.toString());
                case CREATED_DATE:
                    return criteriaBuilder.equal(root.get("createdDate").as(java.sql.Date.class),value);
                case MIN_YEAR:
                    return criteriaBuilder.greaterThanOrEqualTo(criteriaBuilder.function("year", Integer.class, root.get("createdDate")),
                            (Integer) value);
                case MAX_YEAR:
                    return criteriaBuilder.lessThanOrEqualTo(criteriaBuilder.function("year", Integer.class, root.get("createdDate")), (Integer) value);
                case GENDER:
                    return criteriaBuilder.equal(root.get("gender"), value);
                case MIN_DATE:
                    return criteriaBuilder.greaterThanOrEqualTo(root.get("createdDate"), (Date) value);
                case MAX_DATE:
                    return criteriaBuilder.lessThanOrEqualTo(root.get("createdDate"), (Date) value);
            }
            return null;
        }
    }
}
