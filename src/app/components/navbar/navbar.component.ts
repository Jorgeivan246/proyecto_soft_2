import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { NavBarService } from '../../nav-bar.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }



  sesionIniciadaAux=this.userService.sesionIniciada;

}
