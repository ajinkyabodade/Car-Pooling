package com.devglan.userportal;

import java.util.List;

public interface TripsService {
	List<Trips> findAll();
	
    Trips findByuserid(String userid);
    
    Trips delete(String id);
    
    Trips create(Trips trips);
}
