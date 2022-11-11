import { Injectable } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';



@Injectable({
   providedIn: 'root',
 })



export class UserService {
  sesionIniciada: boolean = false;

  token: string;






  constructor(private auth: Auth, private router: Router) {}

  register({ email, password }: any) {
    this.sesionIniciada = true;
    console.log(this.sesionIniciada);
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    this.sesionIniciada=true;
    console.log(this.sesionIniciada)
    return signInWithEmailAndPassword(this.auth, email, password);

  }

  login2(email: string, password: string) {



    signInWithEmailAndPassword(this.auth,email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.sesionIniciada = true;
            this.token = token;

            this.router.navigate(['']);
          });
      });
  }

  getSesion() {
    return this.sesionIniciada;
  }

  getIdToken() {
    return this.token;
  }

  estaLogueado() {
    console.log("El token del user es " , this.token)
    return this.token;
  }

  loginWithGoogle() {

    return signInWithPopup(this.auth, new GoogleAuthProvider());



  }

  logout2() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';

        this.router.navigate(['']);
      });
  }

  logout() {
    this.sesionIniciada = false;
    return signOut(this.auth);
  }
}