import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = {
    email: '',
    password: ''
  };

  constructor(
    private fireauth: AngularFireAuth,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }


  async login() {
    try {
      const result = await this.fireauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
      this.router.navigate(['home']);
    } catch (error) {
      console.log(error);
      this.showToast(error);
    }
  }


  async showToast(error: any) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 3000
    });
    toast.present();
  }

}
