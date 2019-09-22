import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserloginService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/user-portal/users/login';
  //private userUrl = '/api';

  public checkUser(user) {
    // return this.http.post(this.userUrl,{"email":email,"psw":psw});
     // return this.http.get(this.userUrl + "?email="+ email + "&psw="+ psw );
         return this.http.post<User>(this.userUrl, user);
  }


}
