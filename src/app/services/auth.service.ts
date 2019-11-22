import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import IUser from '../models/IUser';
import IUserInfo from '../models/IUserInfo';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(
    private fireauth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  async getLoggedInUserMail(): Promise<string> {
    const userEmail = await this.fireauth.authState.pipe(first()).toPromise();
    if (userEmail) {
      return new Promise<string>(resolve => {
        resolve(userEmail.email);
      });
    }
    return null;
  }

  async getLoggedInUser(): Promise<IUserInfo> {
    const loggedInUserMail = await this.getLoggedInUserMail();
    const promise = new Promise(resolve => this.firestore.collection<IUser>('users').snapshotChanges().subscribe(doc => {
      doc.forEach(async user => {
        const data = user.payload.doc.data() as IUser;
        data.id = user.payload.doc.id;
        if (data.email === loggedInUserMail) {
          resolve({
            userInfo: data,
            isAdmin: data.isAdmin
          });
        }
      });
    })
    );
    return await promise as IUserInfo;
  }

}
