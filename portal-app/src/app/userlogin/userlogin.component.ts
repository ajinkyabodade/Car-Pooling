import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserloginService } from './userlogin.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

 user: User = new User();
  constructor(private router: Router, private userloginService: UserloginService) {

  }

 	login(){
	    this.userloginService.checkUser(this.user)
	      .subscribe( data => {
	        if(!data){
	        	alert("Wrong Email or Password"); return;
	        }else if(!data.id)
        	{
	        	alert("Wrong Email or Password"); return;
        	}else{
        		sessionStorage.setItem('userId', data.id);
            sessionStorage.setItem('userCid', data.companyName);
            sessionStorage.setItem('userName', data.fullName);

        		alert("Login Successfully!!");
            this.router.navigate(['/userDashboard']);
        	}
	      });
	}
}



