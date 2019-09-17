import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

	


export class AppComponent implements OnInit {

	private isSignIn="false";
	
  constructor(location: Location) {
   this.isSignIn = location.path();
  }

  ngOnInit() {
  };

}