import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

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
    private toast: ToastService
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
      this.toast.show('You must select available dates', 3000);
      return;
    }
    this.modalController.dismiss({
      fromDate: this.selectedFrom,
      toDate: this.selectedTo,
      status: 'ok'
    });
  }
}
