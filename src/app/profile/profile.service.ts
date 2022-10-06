
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  _url = environment.apiURL+ "/user"
  constructor( private _http: HttpClient ) { }
  
  profileData ( ) {
    const token = localStorage.getItem("token")

    const headers = { 'Authorization': 'Bearer '+ token }
    return this._http.get<any>( this._url , { headers })
  }
}
