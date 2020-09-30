import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Department, DepartmentDataService } from '../service/data/department-data.service';
import { Employee, EmployeeDataService } from '../service/data/employee-data.service';

@Component({
  selector: 'app-search-department',
  templateUrl: './search-department.component.html',
  styleUrls: ['./search-department.component.css']
})
export class SearchDepartmentComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: DepartmentDataService,
    private employeeService: EmployeeDataService
  ) { }

  departmentId: number;
  department: Department;

  ngOnInit() {
    this.departmentId=Number(this.route.snapshot.params['departmentId']);
    console.log('Arslan'+this.departmentId);
    this.service.executeDepartmentService(this.departmentId).subscribe(
      response => {
        this.employees=response;
      });
  }

  employees: Employee[];
  selectedEmployees: Employee[];

  editEmployee(employeeId: string){
    this.router.navigate(['employee', employeeId]);
  }


}
