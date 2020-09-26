import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../app.component';
import { Department } from '../service/data/department-data.service';
import { Employee, EmployeeDataService } from '../service/data/employee-data.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: EmployeeDataService) { }

  employeeId: string;
  employee: Employee;

  ngOnInit() {
    this.employeeId=this.route.snapshot.params['employeeId'];
    console.log('Arslan'+this.employeeId);
    // employee = new Employee('', '', this.employeeId, new Department(), new Job());
    this.service.executeEmployeeService(this.employeeId).subscribe(
      response => {
        this.employee=response;
        console.log('ETTOOOOOO'+this.employee.employeeId);
        // this.router.navigate(['employee',this.employeeId])
      });
  }

  deleteEmployee(){}


}
