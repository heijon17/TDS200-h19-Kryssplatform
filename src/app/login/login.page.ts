import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

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
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }


  async login() {
    try {
      const result = await this.fireauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      this.router.navigate(['home']);
    } catch (error) {
      this.toast.show(error, 3000);
    }
  }

  register() {
    this.router.navigate(['register']);
  }
}
