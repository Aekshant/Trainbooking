
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private _loginService : LoginService,
    private router: Router,
    private toastr: ToastrService,
    private isLogin :  AuthService
     ) { }

  ngOnInit(): void {
  }
   loginModel = new Login("","")
   showError: boolean = false;

   onSubmit() {
    console.log(this.loginModel);
    this._loginService.login( this.loginModel )
    .subscribe( data =>{
      console.log( data );
      if( data.message == true ) {
        localStorage.setItem("token", data.data.token);
        this.isLogin.isLoggedIn = true
        this.router.navigate(['/']);
      }
      else{
        this.toastr.error( data.message , 'Login', {
          timeOut: 3000,
        });
      }
    })
   }
}
