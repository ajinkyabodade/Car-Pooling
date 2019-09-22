package com.devglan.userportal;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String f_name;
    @Column
    private int c_id;
    @Column
    private String email;
    @Column
    private String psw;
    @Column
    private String emp_id;
    @Column
    private int auth;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public int getAuth() {
        return auth;
    }

    public void setAuth(int auth) {
        this.auth = auth;
    }

    public String getFullName() {
        return f_name;
    }

    public void setFullName(String fName) {
        this.f_name = fName;
    }

    public int getCompanyName() {
        return c_id;
    }

    public void setCompanyName(int cName) {
        this.c_id = cName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return psw;
    }

    public void setPassword(String psw) {
        this.psw = psw;
    }
    
    public String getEmployeeId() {
        return emp_id;
    }

    public void setEmployeeId(String empId) {
        this.emp_id = empId;
    }
}
