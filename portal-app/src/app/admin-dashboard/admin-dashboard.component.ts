import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from '../models/cab.model';
import { Trip } from '../models/trip.model';
import { Alltrips } from '../models/alltrips.model';


import { AdmindashboardService } from './admindashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 cabbyid: Cab = new Cab();
 trip: Trip = new Trip();
 trip1: Trip = new Trip();
 usercab: Cab = new Cab();
 alltrips: Alltrips = new Alltrips();

 tripid:string;
 tripstatus:string ="false";
 userName:string;


  constructor(private router: Router,private admindashboardService: AdmindashboardService) { }

  ngOnInit() {
	if(!sessionStorage.getItem('userCid'))
  	{
	  alert("Login to Continue!!");
   	  this.router.navigate(['/adminlogin']);
  	}

            
  	this.cabbyid.comanyId=sessionStorage.getItem('userCid');
    this.userName=sessionStorage.getItem('adminName');

    this.admindashboardService.getCabs(this.cabbyid)
      .subscribe( data => {
        this.cabbyid = data;
      });

	  	var alltripsobj=[];

      this.trip.cid=sessionStorage.getItem('userCid');
       this.admindashboardService.gettrip(this.trip)
      .subscribe( data => {
      	if(!data){
      	}else{

	      	for (let key in data) {
	      		let i= data[key];
		      	alltripsobj[key]={"trip":{},"user":{},"cab":{}};
		      	alltripsobj[key]['trip']=i;
	      		this.usercab.cid=i['cab_id'];
			    this.admindashboardService.getUserCab(this.usercab)
	            .subscribe( data1 => {
            	 
	             	alltripsobj[key]['cab']=data1;
	             	this.admindashboardService.getuser(i['userid'])
		            .subscribe( data2 => {
		                 alltripsobj[key]['user']=data2;
			          });

	            });
			}

			this.alltrips.trips=alltripsobj;
			console.log("Aaaaaaaaaaaaaaaaaaaaa",this.alltrips)
		}

      });
  	
  }

  approvetrip(tripid,trip){
  		this.trip1=trip;
	    this.trip1.is_approved="1";
	    this.admindashboardService.updatetrip(tripid,this.trip1)
	    .subscribe(data => {
	    

	    });

   }

  // cancelcab(){
  //     this.usercab.vacantSpace=(parseInt(this.usercab.vacantSpace)+1)+"";
  //      this.userdashboardService.deletetrip(this.tripid)
  //     .subscribe(data => {
  //         this.userdashboardService.updatecabvacancy(this.usercab.cid, this.usercab)
  //         .subscribe(data => {
  //             alert("Cab Cancelled Successfull!"); 
  //             this.tripstatus="false";
  //         });
  //       });
  //  }
  
  logout(){
	  sessionStorage.removeItem('userCid');
	  alert("Logout Successfull!!");
   	this.router.navigate(['/home']);
  }

}

