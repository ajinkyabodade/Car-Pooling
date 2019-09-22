package com.devglan.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/trips"})

public class TripsController {
	
    @Autowired
    private TripsService TripsService;

    @PostMapping
    public Trips create(@RequestBody Trips trips){
        return TripsService.create(trips);
    }
    
    @RequestMapping(value = "/viewUserTrip", method = RequestMethod.POST)
	public Trips findByuserid(@RequestBody Trips userid) 
	{
		return TripsService.findByuserid(userid.getuserid());
	}
    
    @DeleteMapping(path ={"/delete/{id}"})
    public Trips delete(@PathVariable("id") String id) {
        return TripsService.delete(id);
    }
    
    @GetMapping
    public List<Trips> findAll(){
        return TripsService.findAll();
    }
    
}
