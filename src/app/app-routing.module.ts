import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signup/signup.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "booking", component : BookingComponent },
  { path : "login", component: LoginComponent},
  { path : "signup", component: SigninComponent},
  { path : "profile", component: ProfileComponent},
  { path : "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
