import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee-data.service';

export class Department{
  constructor(
    public departmentId: number,
    public departmentName: string,
    public location: Location
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  constructor(private http: HttpClient) { }

  executeDepartmentsService(){
    return this.http.get<Department[]>('http://localhost:8088/api/departments');
  }

  executeDepartmentService(departmentId: number){
    return this.http.get<Employee[]>(`http://localhost:8088/api/departments/${departmentId}/employees`);
  }

  getDepartmentService(departmentId: number){
    return this.http.get<Department>(`http://localhost:8088/api/departments/${departmentId}`);
  }
}
