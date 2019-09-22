import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {UserregisterComponent} from './userregister/userregister.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';




const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'register', component: UserregisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'userDashboard', component: UserDashboardComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
