package com.devglan.userportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cabs")
public class Cab {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cid;
    @Column
    private String company_name;
    @Column
    private String driver_name;
    @Column
    private String vacant_space;
    @Column
    private String source;
    @Column
    private String destination;
    @Column
    private String driver_auth;
    @Column
    private String driver_mob;
    @Column
    private String compnyId;
    @Column
    private String pickup;
    @Column
    private String dropoff;
    
	
    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }
    
    public String getCompanyName() {
        return company_name;
    }

    public void setCompanyName(String company_name) {
        this.company_name = company_name;
    }
    
    public String getDriverName() {
        return driver_name;
    }

    public void setDriverName(String driver_name) {
        this.driver_name = driver_name;
    }
    
    public String getVacantSpace() {
        return vacant_space;
    }

    public void setVacantSpace(String vacant_space) {
        this.vacant_space = vacant_space;
    }
    
    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }
    
    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }
    
    public String getDriverAuth() {
        return driver_auth;
    }

    public void setDriverAuth(String driver_auth) {
        this.driver_auth = driver_auth;
    }
    
    public String getDriverMob() {
        return driver_mob;
    }

    public void setDriverMob(String driver_mob) {
        this.driver_mob = driver_mob;
    }
    
    public String getComanyId() {
        return compnyId;
    }

    public void setComanyId(String compnyId) {
        this.compnyId = compnyId;
    }
    public String getpickup() {
        return pickup;
    }

    public void setPickup(String pickup) {
        this.pickup = pickup;
    }
    public String getDropoff() {
        return dropoff;
    }

    public void setDropoff(String dropoff) {
        this.dropoff = dropoff;
    }
}