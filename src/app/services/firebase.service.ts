import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  users: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.users = af.list('/users');
    console.log(this.users);
  }


  getUsers() {
    return this.users;
  }
}

interface User {
  $key?: string;
  name?: string;
  mmr?: number;
}
