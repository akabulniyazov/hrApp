import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './department-data.service';
import { Job } from './job-data.service';


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

  updateEmployeeService(employee_id, employee){
    return this.http.put<Employee>(`http://localhost:8088/api/employee/${employee_id}`, employee);
  }

  createEmployeeService(employee: Employee){
    console.log('In service'+employee.department.departmentId);
    return this.http.post<Employee>(`http://localhost:8088/api/employees`, employee);
  }

  deleteEmployeeService(employeeId: number){
    return this.http.delete<Employee>(`http://localhost:8088/api/employees/${employeeId}`);
  }
}
