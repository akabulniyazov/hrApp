import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'', component: LogInComponent},
  {path:'login', component: LogInComponent},
  {path:'logout', component: LogOutComponent, canActivate:[RouteGuardService]},
  {path:'employees', component: EmployeeDetailsComponent, canActivate:[RouteGuardService]},
  {path:'employees/:employeeId', component: SearchEmployeeComponent, canActivate:[RouteGuardService]},
  {path:'departments/:departmentId', component: SearchDepartmentComponent, canActivate:[RouteGuardService]},
  {path:'employee/:employeeId', component: EditEmployeeComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
