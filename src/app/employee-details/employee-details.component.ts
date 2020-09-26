import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../service/data/department-data.service';
import { Employee, EmployeeDataService } from '../service/data/employee-data.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    private router: Router, 
    private http: HttpClient, 
    private service: EmployeeDataService) { }

  employees: Employee[];

  ngOnInit() {
    this.service.executeEmployeesService().subscribe(
      response => {
        this.employees=response;
        console.log('ETTOOOOOO'+this.employees[4].employeeId);
        this.router.navigate(['employees'])
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


}
