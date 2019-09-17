import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})

export class UserregisterComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userregisterService: UserregisterService) {

  }

  createUser(): void {
      this.userregisterService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}



}
