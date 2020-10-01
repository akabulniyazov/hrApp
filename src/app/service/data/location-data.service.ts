import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Location{
  constructor(
    public locationCountry: string,
    public locationState: string,
    public locationCity: string,
    public locationId: number
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  constructor(private http: HttpClient) { }

  executeLocationsService(){
    return this.http.get<Location>('https://restapi-101.herokuapp.com/api/locations');
  }
}
