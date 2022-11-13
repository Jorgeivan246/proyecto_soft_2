import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(public afAuth:AngularFireAuth, public router: Router, public auth:UserService) {

  }

  async login(user:string, pass:string){
    try{
      await this.auth.login(user, pass);
    // await this.router.navigateByUrl('administrador');
    }catch(e: any){
      alert("Correo o contraseña incorrecto");
    }
  }

  async regitrar(user:string, pass:string){
    try{
      await this.auth.registrar(user, pass);
    //  await this.router.navigateByUrl('administrador');
    }catch(e: any){
      alert("Correo o contraseña incorrecto");
    }
  }



}
