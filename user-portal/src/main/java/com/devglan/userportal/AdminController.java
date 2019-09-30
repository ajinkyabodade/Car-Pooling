package com.devglan.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/admin"})

public class AdminController {
	
    @Autowired
    private AdminService adminService;
        
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Admin findByMemailAndMpassword(@RequestBody Admin loginAdmin) 
	{
		return adminService.findByMemailAndMpassword(loginAdmin.getmemail(),loginAdmin.getmpassword());
	}
     
}