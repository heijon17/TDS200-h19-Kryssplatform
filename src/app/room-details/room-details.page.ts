import { Component, OnInit } from '@angular/core';
import IRoom from '../models/IRoom';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';






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
    public modalController: ModalController,
    private platform: Platform
  ) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.roomData = this.router.getCurrentNavigation().extras.state.roomData as IRoom;
      }
    });
  }

  ngOnInit() {
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
