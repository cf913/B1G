import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private afAuth: AngularFireAuth ) { }

    canActivate(): Observable<boolean> {
        return this.afAuth.authState.map(auth => {
            if (!auth) {
                this.router.navigate(['/home/login']);
                return false;
            } else if (auth && !this.afAuth.auth.currentUser.emailVerified) {
                this.router.navigate(['/home/verify']);
                return false;
            } else {
              return true;
            }
        });
    }
}
