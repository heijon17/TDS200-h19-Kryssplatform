import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.page.html',
  styleUrls: ['./datepicker.page.scss'],
})
export class DatepickerPage implements OnInit {

  @Input() fromDate: Date;
  @Input() toDate: Date;
  private selectedFrom: any;
  private selectedTo: any;

  constructor(
    private modalController: ModalController,
    private toastcontroller: ToastController
  ) { }

  ngOnInit() {
  }

  dismiss(buttonClicked: string) {
    if (buttonClicked === 'cancel') {
      this.modalController.dismiss({
        status: null
      });
      return;
    }
    if (this.selectedFrom == null || this.selectedTo == null) {
      this.displayToastMessage('You must select available dates');
      return;
    }
    this.modalController.dismiss({
      fromDate: this.selectedFrom,
      toDate: this.selectedTo,
      status: 'ok'
    });
  }

  async displayToastMessage(displayMessage: string) {
    const toast = await this.toastcontroller.create({
      message: displayMessage,
      duration: 3000
    });
    toast.present();
  }

}
