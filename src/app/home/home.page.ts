import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) {}


  async logout() {
    await this.fireauth.auth.signOut();
    this.router.navigateByUrl('login');
  }

}
