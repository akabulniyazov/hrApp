import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Location{
  constructor(
    public locationCountry: String,
    public locationState: String,
    public locationCity: String,
    public locationId: number
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  constructor(private http: HttpClient) { }

  executeLocationsService(){
    return this.http.get<Location>('http://localhost:8088/api/locations');
  }
}
