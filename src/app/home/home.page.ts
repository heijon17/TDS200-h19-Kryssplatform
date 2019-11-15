import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import IRoom from '../models/IRoom';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private rooms$: Observable<IRoom[]>;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.rooms$ = this.firestore.collection('rooms').valueChanges() as Observable<IRoom[]>;
  }

  showDetails(room: IRoom) {
    const navExtras: NavigationExtras = {
      state: {
        roomData: room
      }
    };
    this.router.navigate(['room-details'], navExtras);
  }


  async logout() {
    await this.fireauth.auth.signOut();
    this.router.navigateByUrl('login');
  }

}
