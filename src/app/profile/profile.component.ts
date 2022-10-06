import { Component, OnInit } from '@angular/core';
import { ProfileService } from "./profile.service"
import { Router } from '@angular/router';
import { Profile } from "./profile"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private profileData : ProfileService,
    private router: Router,
  ) { }
    
  public obj:any = {};
  public tickets:any = [];
  ngOnInit(): void {
    this.profileData.profileData()
    .subscribe( data => {
      this.obj = data.data
      this.tickets = data.data.tickets
    })
  }
}
 