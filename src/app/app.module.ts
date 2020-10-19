import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ROUTES } from '@angular/router';
import { SearchDepartmentComponent } from './search-department/search-department.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    SearchEmployeeComponent,
    SearchDepartmentComponent,
    EditEmployeeComponent,
    LogInComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

