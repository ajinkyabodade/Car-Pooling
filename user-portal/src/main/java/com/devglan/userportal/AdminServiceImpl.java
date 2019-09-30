package com.devglan.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository repository;

   	@Override
    public Admin findByMemailAndMpassword(String Memail, String Mpassword) {
		return repository.findByMemailAndMpassword( Memail, Mpassword);
	}
}
