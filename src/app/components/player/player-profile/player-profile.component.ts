import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  user;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.auth.currentUser;
    console.log(this.user.emailVerified);
  }

  ngOnInit() {
  }

}
