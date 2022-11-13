import { Injectable } from '@angular/core';



import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';



@Injectable({
   providedIn: 'root',
 })



export class UserService {






  constructor(public auth:AngularFireAuth, private router:Router) {
    auth.authState.subscribe(user=>{
      console.log(user);
    })
  }



  login(user:string, pass:string){
    return this.auth.signInWithEmailAndPassword(user, pass);
  }

  registrar(user:string, pass:string){
    return this.auth.createUserWithEmailAndPassword(user, pass);
  }


  logOut()
  {

    return this.auth.signOut();

  }

    loginWithGoogle() {

      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());



      }

  // constructor(private auth: Auth, private router: Router) {}

  // register({ email, password }: any) {
  //   this.sesionIniciada = true;
  //   console.log(this.sesionIniciada);
  //   return createUserWithEmailAndPassword(this.auth, email, password);
  // }

  // login({ email, password }: any) {
  //   this.sesionIniciada=true;
  //   console.log(this.sesionIniciada)
  //   return signInWithEmailAndPassword(this.auth, email, password);

  // }

  // login2(email: string, password: string) {



  //   signInWithEmailAndPassword(this.auth,email, password)
  //     .then((response) => {
  //       firebase
  //         .auth()
  //         .currentUser?.getIdToken()
  //         .then((token) => {
  //           this.sesionIniciada = true;
  //           this.token = token;

  //           this.router.navigate(['']);
  //         });
  //     });
  // }

  // getSesion() {
  //   return this.sesionIniciada;
  // }

  // getIdToken() {
  //   return this.token;
  // }

  // estaLogueado() {
  //   console.log("El token del user es " , this.token)
  //   return this.token;
  // }

  // loginWithGoogle() {

  //   return signInWithPopup(this.auth, new GoogleAuthProvider());



  // }

  // logout2() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       this.token = '';

  //       this.router.navigate(['']);
  //     });
  // }

  // logout() {
  //   this.sesionIniciada = false;
  //   return signOut(this.auth);
  // }
}
