import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HeadingComponent } from './heading/heading.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    HeadingComponent,
    HomeComponent,
    BookingComponent,
    LoginComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
