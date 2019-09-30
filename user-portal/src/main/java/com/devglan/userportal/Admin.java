package com.devglan.userportal;

import javax.persistence.*;

@Entity
@Table(name = "company")
public class Admin {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cid;
    @Column
    private String company_name;
    @Column
    private String manager_name;
    @Column
    private String memail;
    @Column
    private String mpassword;
  
    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }
    
    public String getcompany_name() {
        return company_name;
    }

    public void setcompany_name(String company_name) {
        this.company_name = company_name;
    }

     public String getmanager_name() {
        return manager_name;
    }

    public void setmanager_name(String manager_name) {
        this.manager_name = manager_name;
    }
    
    public String getmemail() {
        return memail;
    }

    public void setmemail(String memail) {
        this.memail = memail;
    }
    
    public String getmpassword() {
        return mpassword;
    }

    public void setmanager_password(String mpassword) {
        this.mpassword = mpassword;
    }
}
