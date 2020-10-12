import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<Job[]>(`${API_URL}/jobs`);
  }
  
  executeJobService(jobId: string){
    return this.http.get<Job>(`${API_URL}/jobs/${jobId}`);
  }
}
