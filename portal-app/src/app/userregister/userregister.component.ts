import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as sweetalert from 'sweetalert';
import { User } from '../models/user.model';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})

export class UserregisterComponent  {

  user: User = new User();

  constructor(private router: Router, private userregisterService: UserregisterService) {

  }

  createUser(): void {
      this.userregisterService.createUser(this.user)
        .subscribe( data => {
          sweetalert({
              title: "Registration Successfull!",
              text:"Please Login to Continue"
              icon: "success",
            });
        });

  };

}





