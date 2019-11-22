import { Component, OnInit } from '@angular/core';
import IRoom from '../models/IRoom';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatepickerPage } from '../modals/datepicker/datepicker.page';


export interface IRoomId extends IRoom { id: string; }

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {


  private roomData: IRoom;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform,
    private firestore: AngularFirestore,
    private modalcontroller: ModalController
  ) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.roomData = this.router.getCurrentNavigation().extras.state.roomData as IRoom;
      }
    });
  }

  ngOnInit() {
  }

  async showDateModal() {
    const modal = await this.modalcontroller.create({
      component: DatepickerPage,
      componentProps: {
        fromDate: this.roomData.fromDate,
        toDate: this.roomData.toDate,
        newRoom: false
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data.status === 'ok') {
      // handle dates
      const dates = {};
      this.bookRoom(dates);
    }
  }

  async bookRoom(dates: any) {
    // TODO: implement support for dates booked.
    const roomRef = this.firestore.collection<IRoom>('rooms').doc(this.roomData.id);
    return roomRef.update({
      available: false
    });
  }

  showOnMap() {
    const location = `${this.roomData.lat},${this.roomData.long}`;
    if (this.platform.is('android')) {
      window.open('geo:0,0?q=' + location, '_system');
    } else {
      window.open('maps://?q=' + location, '_system');
    }
  }
}
