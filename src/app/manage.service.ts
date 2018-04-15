import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import{environment} from "./../environments/environment";
import "rxjs";
// import { rename } from 'fs';



@Injectable()
export class ManageService {

  private localEndpoints = environment.local;
  constructor(private http: Http) { }



  addHeaders(headers: Headers){
    headers.append("Accept", "application/json");
  }

  getWeather(lat, lng){
    let url = this.localEndpoints.weatherUrl+"?lat="+lat+"&lon="+lng+"&APPID=807067c77d8d2815771552a22a5af01f";
let headers = new Headers();
this.addHeaders(headers)
    return this.http.get(url, {headers: headers})

  }

}
