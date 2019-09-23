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
 trip1: Trip = new Trip();
 usercab: Cab = new Cab();
 tripid:string;
 tripstatus:string ="false";


  constructor(private router: Router,private userdashboardService: UserdashboardService) { }

  ngOnInit() {
	if(!sessionStorage.getItem('userId'))
  	{
	  alert("Login to Continue!!");
   	  this.router.navigate(['/login']);
  	}

            
  	this.cabbyid.comanyId=sessionStorage.getItem('userCid');

    this.trip1.userid=sessionStorage.getItem('userCid');
    this.userdashboardService.gettrip(this.trip1)
      .subscribe( data => {
        if(!data.cid){

        }else{
            if(data.is_approved=="1"){
              this.tripstatus="approved";
            }else{
              this.tripstatus="requested";
            }
          this.tripid=data.id;
          this.usercab.cid=data.cid;
        this.userdashboardService.getUserCab(this.usercab)
          .subscribe( data => {
            this.usercab = data;
          });
        }
      });

  	this.userdashboardService.getCabs(this.cabbyid)
      .subscribe( data => {
        this.cabbyid = data;
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

  cancelcab(){
      this.usercab.vacantSpace=(parseInt(this.usercab.vacantSpace)+1)+"";
       this.userdashboardService.deletetrip(this.tripid)
      .subscribe(data => {
          this.userdashboardService.updatecabvacancy(this.usercab.cid, this.usercab)
          .subscribe(data => {
              alert("Cab Cancelled Successfull!"); 
              this.tripstatus="false";
          });
        });
   }
  
  logout(){
	  sessionStorage.removeItem('userId');
	  alert("Logout Successfull!!");
   	  this.router.navigate(['/home']);
  }

}

