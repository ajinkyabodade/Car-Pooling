import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from '../models/cab.model';
import { Trip } from '../models/trip.model';

import { UserdashboardService } from './userdashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
 cabbyid: Cab = new Cab();
 trip: Trip = new Trip();

  constructor(private router: Router,private userdashboardService: UserdashboardService) { }

  ngOnInit() {
	if(!sessionStorage.getItem('userId'))
  	{
	  alert("Login to Continue!!");
   	  this.router.navigate(['/login']);
  	}

            
  	this.cabbyid.comanyId=sessionStorage.getItem('userCid');

  	this.userdashboardService.getCabs(this.cabbyid)
      .subscribe( data => {
        this.cabbyid = data;
        console.log(this.cabbyid);
      });
  }

  optcab(cabid,index){
    let userid=sessionStorage.getItem('userId');
    let companyid=sessionStorage.getItem('userCid');
      this.trip.cab_id=cabid;
      this.trip.userid=userid;
      this.trip.cid=companyid;
      this.trip.is_approved="0";


      this.userdashboardService.optcab(this.trip)
      .subscribe( data => {
        this.cabbyid[index]['vacantSpace']=this.cabbyid[index]['vacantSpace']-1;
        this.userdashboardService.updatecabvacancy(this.cabbyid[index]['cid'],this.cabbyid[index])
        .subscribe(data => {
            alert("Cab Request Succesfull!"); 
        });
      });
   }
  
  logout(){
	  sessionStorage.removeItem('userId');
	  alert("Logout Successfull!!");
   	  this.router.navigate(['/home']);
  }

}

