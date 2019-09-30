import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Admin } from '../models/admin.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminloginService {

  constructor(private http:HttpClient) {}

  private adminUrl = 'http://localhost:8080/user-portal/admin/login';
  //private userUrl = '/api';

  public checkAdmin(admin) {
    // return this.http.post(this.userUrl,{"email":email,"psw":psw});
     // return this.http.get(this.userUrl + "?email="+ email + "&psw="+ psw );
         return this.http.post<Admin>(this.adminUrl, admin);
  }


}
