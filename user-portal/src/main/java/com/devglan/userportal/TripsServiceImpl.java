package com.devglan.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripsServiceImpl implements TripsService {

    @Autowired
    private TripsRepository repository;

    @Override
    public List<Trips> findAll() {
        return repository.findAll();
    }

	@Override
	public Trips findByuserid(String userid) {
		return repository.findByuserid(userid);
	}
	
	@Override
	public List<Trips> findByCid(String cid) {
		return repository.findByCid(cid);
	}
	
	  @Override
	    public Trips delete(String id) {
	        Trips trips = findByuserid(id);
	        if(trips != null){
	            repository.delete(trips);
	        }
	        return trips;
	    }
	  
	  @Override
	    public Trips create(Trips trips) {
	        return repository.save(trips);
	    }
	  
		 @Override
		 public Trips update(Trips trips) {
		    return repository.save(trips);
		 }

}
