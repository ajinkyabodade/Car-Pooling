import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cab } from '../models/cab.model';
import { Trip } from '../models/Trip.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdmindashboardService {

  constructor(private http:HttpClient) {}

  private cabUrl = 'http://localhost:8080/user-portal/cab/bycid';
  private cabUrld = 'http://localhost:8080/user-portal/cab';
  private tripUrl = 'http://localhost:8080/user-portal/trips';
  private singletripUrl = 'http://localhost:8080/user-portal/trips/viewctrip';
  private usercab = 'http://localhost:8080/user-portal/cab/viewusercab';
  private getuserUrl = 'http://localhost:8080/user-portal/users';





  public getCabs(cab) {
    return this.http.post<Cab>(this.cabUrl,cab);
  }

  public getUserCab(cab) {
    return this.http.post<Cab>(this.usercab,cab);
  }

  public updatetrip(tripid,trip) {
    return this.http.put(this.tripUrl+ "/"+ tripid,trip);
 }

 public updatecabvacancy(cabid,cab) {
    return this.http.put(this.cabUrld + "/"+ cabid,cab);	
 }

 public gettrip(trip) {
    return this.http.post<Trip>(this.singletripUrl,trip);
  }

  public deletetrip(tripid) {
    return this.http.delete(this.tripUrl + "/"+ tripid);
  }

  public getuser(userid) {
    return this.http.get(this.getuserUrl + "/"+ userid);  
 }



}
