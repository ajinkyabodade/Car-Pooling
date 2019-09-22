package com.devglan.userportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "trips")
public class Trips {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String cab_id;
    @Column
    private String cid;
    @Column
    private String userid;
    @Column
    private String is_approved;

	
    public int getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }
    
    public String getcab_id() {
        return cab_id;
    }

    public void setcab_id(String cab_id) {
        this.cab_id = cab_id;
    }
    
    public String getcid() {
        return cid;
    }

    public void setcid(String cid) {
        this.cid = cid;
    }
    
    public String getuserid() {
        return userid;
    }

    public void setuserid(String userid) {
        this.userid = userid;
    }
    
    public String getis_approved() {
        return is_approved;
    }

    public void setis_approved(String is_approved) {
        this.is_approved = is_approved;
    }
}