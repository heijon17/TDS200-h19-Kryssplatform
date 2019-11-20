import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Event, NavigationExtras, NavigationStart } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import IRoom from '../models/IRoom';
import { Observable } from 'rxjs';
import { first, filter } from 'rxjs/operators';
import IUser from '../models/IUser';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private rooms$: Observable<IRoom[]>;
  private isAdmin = false;

  private loggenInEmail = '';
  private loggedInUser: IUser;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.getLoggedInUserData();
      }
    });
  }



  ngOnInit() {
    this.getLoggedInUserData();
    this.rooms$ = this.firestore.collection('rooms').valueChanges() as Observable<IRoom[]>;
  }


  async getLoggedInUserData() {
    const userEmail = await this.fireauth.authState.pipe(first()).toPromise();
    if (userEmail) {
      this.loggenInEmail = userEmail.email;
    }

    this.firestore.collection<IUser>('users').snapshotChanges().subscribe(doc => {
      doc.forEach(user => {
        const data = user.payload.doc.data() as IUser;
        data.id = user.payload.doc.id;
        if (data.email === this.loggenInEmail) {
          this.loggedInUser = data;
          this.isAdmin = data.isAdmin;
          return;
        }
      });
    });
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
    this.isAdmin = false;
    await this.fireauth.auth.signOut();
    this.router.navigateByUrl('login');
  }

}
