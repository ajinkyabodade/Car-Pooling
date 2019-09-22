import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

	


export class AppComponent  {

	private userLogin="";
	
  constructor(location: Location) {
   this.userLogin = sessionStorage.getItem('islogin');

  }

}