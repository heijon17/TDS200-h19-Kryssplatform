import { Component, OnInit } from '@angular/core';
import { CryptService } from '../services/crypt.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private newUser = {
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
    password: ''
  };

  constructor(
    private cryptService: CryptService,
    private toastcontroller: ToastController
  ) { }

  ngOnInit() {
  }

  register() {

    if (!this.newUser.firstname || !this.newUser.lastname ||
      !this.newUser.email || !this.newUser.password) {
      this.displayToastMessage('Fill in full name, e-mail and password');
      return;
    }


    console.log(this.newUser.password);
    const encrypted = this.cryptService.encrypt(this.newUser.password, this.newUser.password);
    const decrypted = this.cryptService.decrypt(this.newUser.password, encrypted);
    console.log(encrypted);
    console.log(decrypted);
  }

  async displayToastMessage(displayMessage: string) {
    const toast = await this.toastcontroller.create({
      message: displayMessage,
      duration: 3000
    });
    toast.present();
  }

}
