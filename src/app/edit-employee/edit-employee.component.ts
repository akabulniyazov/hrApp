
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, DepartmentDataService } from '../service/data/department-data.service';
import { Employee, EmployeeDataService } from '../service/data/employee-data.service';
import { Job, JobDataService } from '../service/data/job-data.service';
import { Location } from '../service/data/location-data.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId: string;
  employee: Employee;
  departments: Department[];
  jobs: Job[];

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: EmployeeDataService,
    private departmentService: DepartmentDataService,
    private jobService: JobDataService
  ) { }

  location = new Location('','','',-1);

  ngOnInit() {
    this.employeeId=this.route.snapshot.params['employeeId'];
 
    this.employee = new Employee('','',-1, new Department(-1, null, location), new Job('','',-1));
    
    if(this.employeeId!='-1'){
    this.service.executeEmployeeService(this.employeeId).subscribe(
      response => {
        this.employee=response;
      }
    )
    }

    this.departmentService.executeDepartmentsService().subscribe(
      response => {
        this.departments=response;
      })  
    
    this.jobService.executeJobsService().subscribe(
      response => {
        this.jobs= response;
      }
    )
  }

  saveEmployee(){
    if(this.employeeId=='-1'){
      this.employee.department.departmentId=this.selectedDepartment;
      this.employee.job.jobId=this.jobId;

      // this.jobService.executeJobService(this.jobId).subscribe(
      //   response => {
      //     this.employee.job.title=response.title;
      //     console.log('JJJJ'+response.title);
      //   }
      // )
      // this.employee.department=new Department(this.employee.department.departmentId, this.employee.department.departmentName, location);
      // this.employee.department=this.department;
      // this.employee.department.departmentName==this.departmentName;
      console.log('DDDDD'+this.employee.department.departmentName);
      console.log(this.employee);
      this.service.createEmployeeService(this.employee).subscribe();
      this.router.navigate(['employees']);
    }else{
      this.service.updateEmployeeService(this.employeeId, this.employee).subscribe(
        data => {
          console.log(data),
          this.router.navigate(['employees'])
        }
      );
    }
  }

  selectedDepartment: number;
  departmentName: string;

  selectChangeHandler (event: any) {
    this.selectedDepartment = event.target.value;
    console.log('Department '+this.selectedDepartment);
    this.departmentService.getDepartmentService(this.selectedDepartment).subscribe(
      response => {
        this.employee.department.departmentName= response.departmentName;
        console.log('DDDDD'+this.employee.department.departmentName);
      }
    )
  }

  jobId: string;
  selectChangeHandlerJob (event: any) {
    this.jobId = event.target.value;
  }

}
