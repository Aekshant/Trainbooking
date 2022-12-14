
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Login } from './login';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = environment.apiURL+ "/user/signin"
  constructor( private _http: HttpClient ) { }
  
  login ( login : Login) {
    return this._http.post<any>( this._url, login )
  }
}
