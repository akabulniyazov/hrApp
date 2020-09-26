import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Department>('http://localhost:8088/api/departments');
  }
}
