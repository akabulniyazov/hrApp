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
    return this.http.get<Department[]>('https://restapi-101.herokuapp.com/api/departments');
  }

  executeDepartmentService(departmentId: number){
    return this.http.get<Employee[]>(`https://restapi-101.herokuapp.com/api/departments/${departmentId}/employees`);
  }

  getDepartmentService(departmentId: number){
    return this.http.get<Department>(`https://restapi-101.herokuapp.com/api/departments/${departmentId}`);
  }
}
