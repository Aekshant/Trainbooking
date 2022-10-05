import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   loginModel = new Login("","")

   onSubmit() {
    console.log(this.loginModel);
   }
}
