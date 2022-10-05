
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = "http://localhost:3000/v1/user/signin"
  constructor( private _http: HttpClient ) { }
  
  login ( login : Login) {
    return this._http.post<any>( this._url, login )
  }
}
