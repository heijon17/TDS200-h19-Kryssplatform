import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Event, NavigationExtras, NavigationStart } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import IRoom from '../models/IRoom';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import IUser from '../models/IUser';
import IUserInfo from '../models/IUserInfo';
import { AuthService } from '../services/auth.service';
import { userInfo } from 'os';
import { ToastService } from '../services/toast.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  private rooms$: Observable<IRoom[]>;
  private isAdmin = false;

  private loggedInUser: IUser; // User information. Can be used for MyPage or something.

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore,
    private auth: AuthService,
    private toast: ToastService
  ) {
    router.events.subscribe((event: Event) => { // Listening for routing events and calls getLoggedInUserData() when navigation starts.
      if (event instanceof NavigationStart &&
        event.url === '/home' &&
        !this.loggedInUser) { // https://medium.com/@Carmichaelize/detecting-router-changes-with-angular-2-2f8c019788c3
        this.getLoggedInUserData();
      }
    });
  }

  ngOnInit() {
    this.getLoggedInUserData();
    this.rooms$ = this.firestore.collection('rooms').valueChanges() as Observable<IRoom[]>; // From lecture.
  }

  async getLoggedInUserData() {
    await this.auth.getLoggedInUser().then((info) => {
      this.isAdmin = info.isAdmin;
      this.loggedInUser = info.userInfo;
      this.toast.show(`Welcome! Logged in as ${info.userInfo.firstname} ${info.userInfo.lastname}`, 3000);
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
    this.loggedInUser = null;
    await this.fireauth.auth.signOut();
    this.router.navigateByUrl('login');
  }

}
