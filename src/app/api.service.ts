import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchModel,TripsInterface } from "./models/tripsInterface";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private havaUrl = environment.havaUrl;

  trips: TripsInterface[];
  searchValues:SearchModel;

  constructor(private http: HttpClient) { }

  getTrips(): Observable<TripsInterface> {
    return this.http.get<TripsInterface>(`${this.havaUrl}`);
  }
}
