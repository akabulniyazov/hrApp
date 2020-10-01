import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Job{
  constructor(  
    public title: string,
    public jobId: string,
    public salary: number){}
}

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private http: HttpClient) { }

  executeJobsService(){
    return this.http.get<Job[]>(`https://restapi-101.herokuapp.com/api/jobs`);
  }
  
  executeJobService(jobId: string){
    return this.http.get<Job>(`https://restapi-101.herokuapp.com/api/jobs/${jobId}`);
  }
}
