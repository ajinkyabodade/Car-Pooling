import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {UserregisterService} from './userregister/userregister.service';
import { UserdashboardService } from './user-dashboard/userdashboard.service';
import { AdmindashboardService } from './admin-dashboard/admindashboard.service';
import {UserloginService} from './userlogin/userlogin.service';
import {AdminloginService} from './adminlogin/adminlogin.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UserloginComponent,
    UserregisterComponent,
    HomepageComponent,
    UserDashboardComponent,
    AdminloginComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,UserregisterService,UserloginService,UserdashboardService,AdminloginService,AdmindashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
