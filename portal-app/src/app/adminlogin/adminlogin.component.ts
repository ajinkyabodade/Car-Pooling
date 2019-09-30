import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AdminloginService } from './adminlogin.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

 admin: Admin = new Admin();
  constructor(private router: Router, private adminloginService: AdminloginService) {

  }

 	login(){
	    this.adminloginService.checkAdmin(this.admin)
	      .subscribe( data => {
	        if(!data){
	        	alert("Wrong Email or Password"); return;
	        }else if(!data.cid)
        	{
	        	alert("Wrong Email or Password"); return;
        	}else{
        	sessionStorage.setItem('adminCid', data.cid);
            sessionStorage.setItem('companyName', data.company_name);
            sessionStorage.setItem('adminName', data.manager_name);

        	alert("Login Successfully!!");
            this.router.navigate(['/adminDashboard']);
        	}
	      });
	}
}



