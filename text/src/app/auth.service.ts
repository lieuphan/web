import { Injectable } from '@angular/core';
import *as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  OnLogin(user) {

    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }
  OnRegister(user) {
    return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(user.name, user.password);

  }
  checkLogin() {
    return firebase.auth();
  }

  onLogout() {
    return firebase.auth().signOut();
  }

  checkRule(userId) {
    return firebase.firestore().collection("Rules").doc(userId).get();
    console.log(userId)
  }
}
