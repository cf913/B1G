import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          return resolve(userData);
        }, err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => {
          const user = this.afAuth.auth.currentUser;
          user.sendEmailVerification().then(
            (success) => {console.log('please verify your email')}
          ).catch(
            (err) => {
              return reject(err);
            }
          );
          return resolve(userData);
        }, err => {
          return reject(err);
        });
    });
  }
}
