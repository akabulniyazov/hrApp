import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee-data.service';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<Department[]>(`${API_URL}/departments`);
  }

  executeDepartmentService(departmentId: number){
    return this.http.get<Employee[]>(`${API_URL}/departments/${departmentId}/employees`);
  }

  getDepartmentService(departmentId: number){
    return this.http.get<Department>(`${API_URL}/departments/${departmentId}`);
  }
}
