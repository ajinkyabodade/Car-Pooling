package com.devglan.userportal;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface TripsRepository extends Repository<Trips, Integer> {
  
    List<Trips> findAll();
    
    Trips findByuserid(String userid);
    
    Trips save(Trips trips);
    
    void delete(Trips trips);
   
}
