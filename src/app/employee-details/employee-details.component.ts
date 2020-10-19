import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, DepartmentDataService } from '../service/data/department-data.service';
import { Employee, EmployeeDataService } from '../service/data/employee-data.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private http: HttpClient, 
    private service: EmployeeDataService,
    private departmentService: DepartmentDataService) { }

  employees: Employee[];
  departments: Department[];

  ngOnInit() {
    this.service.executeEmployeesService().subscribe(
      response => {
        this.employees=response;
        this.router.navigate(['employees'])
      })

    this.departmentService.executeDepartmentsService().subscribe(
      response => {
        this.departments=response;
      })  
  }


  handleSuccessfulResponse(response){
    console.log(response);
  }

  employeeId: string;
  onKey(event) {this.employeeId = event.target.value;}

  getEmployee(){
    console.log('Hellooooosdd'+this.employeeId);
    this.router.navigate(['employees',this.employeeId]);
  }

  selectedDepartment: string;

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDepartment = event.target.value;
    this.router.navigate(['departments', this.selectedDepartment]);
  }

  editEmployee(employeeId: string){
    this.router.navigate(['employee', employeeId]);
  }

  message: string;

  deleteEmployee(employeeId: number){
    this.service.deleteEmployeeService(employeeId).subscribe();
    this.refreshTodos();
    this.message =`Employee with employe id ${employeeId} is deleted sucessfully`;
  }

  refreshTodos(){
    this.service.executeEmployeesService().subscribe(
      response => {
        this.employees=response;
        this.router.navigate(['employees'])
      }
  )
  }

}
