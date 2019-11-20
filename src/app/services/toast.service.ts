import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastcontroller: ToastController
  ) { }

  async show(message: string, duration: number) {
    const toast = await this.toastcontroller.create({
      message,
      duration
    });
    toast.present();
  }

}
