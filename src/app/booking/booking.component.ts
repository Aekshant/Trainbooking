import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from './booking.service';
import { Booking } from './booking';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(
    private _bookingService : BookingService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  bookingModel = new Booking("Select Journey Type","","","","",0,0,"Select Travel Class")
  token = localStorage.getItem("token") ? true : false

  onSubmit() {
    if( !this.token ){
      this.toastr.show( "Please Login Please" , 'Booking', {
        timeOut: 4000,
      });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
      return
    }
    
    if( this.bookingModel.type == "Select Journey Type" ) {
      this.toastr.error( "Select Journey Type" , 'Booking', {
        timeOut: 3000,
      });
      return;
    }else if( this.bookingModel.from == "" || this.bookingModel.from == "" || this.bookingModel.depart == "" || this.bookingModel.to == ""  ) {
      this.toastr.error( "Please Fill Form" , 'Booking', {
        timeOut: 3000,
      });
      return;
    }else if( this.bookingModel.travelClass == "Select Travel Class" ) {
      this.toastr.error( "Select Journey Type" , 'Booking', {
        timeOut: 3000,
      });
      return;
    }
    console.log(this.bookingModel);
    this._bookingService.booking( this.bookingModel )
    .subscribe( data =>{
      if( data.status == true ) {
        this.toastr.success( data.message , 'Booking', {
          timeOut: 3000,
        });
        setTimeout(() => {
          location.reload()
        }, 1000);
      }
      else{
        this.toastr.error( data.message , 'Booking', {
          timeOut: 3000,
        });
      }
    })
   }

}
