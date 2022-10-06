
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from "./signup"; 
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class SignUPService {
  _url = environment.apiURL+ "/user/signup"
  constructor( private _http: HttpClient ) { }
  
  signUp ( user : User) {
    return this._http.post<any>( this._url, user )
  }
}
