package com.devglan.userportal;

import java.util.List;

public interface CabService {
	List<Cab> findAll();
	
    List<Cab> findByCompnyId(String CompnyId);
    
    Cab update(Cab cab);
    
    Cab findBycid(int i);
}
