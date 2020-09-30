import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

const routes: Routes = [
  {path:'employees', component: EmployeeDetailsComponent},
  {path:'employees/:employeeId', component: SearchEmployeeComponent},
  {path:'departments/:departmentId', component: SearchDepartmentComponent},
  {path:'employee/:employeeId', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
