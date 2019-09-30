package com.devglan.userportal;

import java.util.List;

public interface TripsService {
	List<Trips> findAll();
	
    Trips findByuserid(String userid);
    
    List<Trips> findByCid(String cid);
    
    Trips delete(String id);
    
    Trips create(Trips trips);
    
    Trips update(Trips trips);
}
