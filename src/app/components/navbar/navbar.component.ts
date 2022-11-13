import { Component, OnInit } from '@angular/core';
import { User, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavBarService } from '../../nav-bar.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor(public auth:UserService,public authFire:AngularFireAuth) {


  }
  ngOnInit(): void {

  }


  logOut()
  {
    this.auth.logOut();
  }








}
