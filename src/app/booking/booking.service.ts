
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Booking } from "./booking";
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  _url = environment.apiURL+ "/ticket"
  constructor( private _http: HttpClient ) { }
  
  booking ( bookingData : Booking) {
    const token = localStorage.getItem("token")
    const headers = { 'Authorization': 'Bearer '+ token }
    return this._http.post<any>( this._url, bookingData ,{ headers })
  }
}
