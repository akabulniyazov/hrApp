import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export class Job{
  constructor(
      public jobId: number,
      public title: string,
      public salary: number
    ){}
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hrApp';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    // let obs = this.http.get<Job>('https://api.github.com/users/akabulniyazov');
    // let obs = this.http.get('http://localhost:8088/api/employee');
    // obs.subscribe((response) => console.log(response));
  }


}
