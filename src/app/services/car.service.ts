import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiurl = 'https://localhost:44393/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiurl);
  }

}
