import { Component, OnInit } from '@angular/core';
import { AuthService } from "../login/auth.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    public loginCheck : AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  token = localStorage.getItem("token") ? true : false
  
  // login = this.loginCheck.isLoggedIn

  logout () {
    localStorage.removeItem("token")
    this.router.navigate(['/login']);
  }
}
