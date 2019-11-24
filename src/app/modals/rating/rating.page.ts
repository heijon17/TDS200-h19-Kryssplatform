import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  private score: number;

  constructor(
    private modalController: ModalController,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  setRate(event: number) {
    this.score = event;
  }

  dismiss(buttonClicked: string) {
    if (buttonClicked === 'cancel') {
      this.modalController.dismiss({
        status: null
      });
      return;
    }
    if (!this.score) {
      this.toast.show('You must select a score first...', 3000);
      return;
    }
    this.modalController.dismiss({
      rating: this.score,
      status: 'ok'
    });
  }

}
