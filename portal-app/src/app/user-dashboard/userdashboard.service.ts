import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cab } from '../models/cab.model';
import { Trip } from '../models/Trip.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserdashboardService {

  constructor(private http:HttpClient) {}

  private cabUrl = 'http://localhost:8080/user-portal/cab/bycid';
  private cabUrld = 'http://localhost:8080/user-portal/cab';
  private tripUrl = 'http://localhost:8080/user-portal/trips';


  public getCabs(cab) {
    return this.http.post<Cab>(this.cabUrl,cab);
  }

  public optcab(trip) {
    return this.http.post<Trip>(this.tripUrl,trip);
 }

 public updatecabvacancy(cabid,cab) {
    return this.http.put(this.cabUrld + "/"+ cabid,cab);	
 }


}
