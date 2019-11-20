import { Component, OnInit } from '@angular/core';
import { CryptService } from '../services/crypt.service';
import { ToastService } from '../services/toast.service';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import IUser from '../models/IUser';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private newUser: IUser = {
    id: '',
    firstname: '',
    lastname: '',
    address: '',
    phone: null,
    email: '',
    password: '',
    isAdmin: false
  };

  constructor(
    private cryptService: CryptService,
    private toast: ToastService,
    private firebase: FirebaseApp,
    private firestore: AngularFirestore,
    private location: Location
  ) { }

  ngOnInit() {
  }

  async register() {
    if (!this.newUser.firstname || !this.newUser.lastname ||
      !this.newUser.email || !this.newUser.password) {
      this.toast.show('Fill in full name, e-mail and password', 3000);
      return;
    }
    // creating new firebase auth user.
    await this.createAuthUser();
  }

  async createAuthUser() {
    try {
      await this.firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password);
      // create user in database document.
      await this.createUser();
    } catch (error) {
      this.toast.show(error, 3000);
    }
  }

  async createUser() {
    const encPassword = this.cryptService.encrypt(this.newUser.password, this.newUser.password);
    const userRef = this.firestore.collection<IUser>('users');
    try {
      await userRef.add(this.newUser).then(ref => {
        ref.set({
          id: ref.id,
          password: encPassword
        }, { merge: true });
      });
      this.location.back();
      this.toast.show(`User ${this.newUser.firstname} added and logged in!`, 3000);
    } catch (error) {
      this.toast.show(error, 3000);
    }
  }
}
