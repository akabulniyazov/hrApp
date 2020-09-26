import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from 'src/app/app.component';
import { Department } from './department-data.service';


export class Employee{

  constructor(
    public firstName: string,
    public lastName: string,
    public employeeId: number,
    public department: Department,
    public job: Job
  ){}

}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  executeEmployeesService(){
    return this.http.get<Employee[]>(`http://localhost:8088/api/employees`);
  }

  executeEmployeeService(employee_id){
    return this.http.get<Employee>(`http://localhost:8088/api/employees/${employee_id}`);
  }
}
