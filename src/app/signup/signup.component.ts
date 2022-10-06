import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUPService } from "./signup.service"
import { User } from "./signup";

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private _signupService : SignUPService,
  ) { }

  ngOnInit(): void {
  }
  signUpModel = new User("","","","")
  showError: boolean = false;

  onSubmit() {
    console.log(this.signUpModel);
      if( this.signUpModel.password != this.signUpModel.confirmPassword ){
        this.toastr.error( "Password and Confirm Password Should be Same" , 'SignUo', {
                timeOut: 3000,
              });
        return;
      }
    this._signupService.signUp( this.signUpModel )
    .subscribe( data =>{
      console.log( data );
      if( data.status == true ) {
        this.toastr.success( data.message , 'SignUp', {
          timeOut: 5000,
        });
        this.toastr.show( "We Redirecting you to Login " , 'SignUp', {
          timeOut: 5000,
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 6000);
      }
      else{
        this.toastr.error( data.message , 'SignUp', {
          timeOut: 3000,
        });
      }
    })
   }
}
