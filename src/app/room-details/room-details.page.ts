import { Component, OnInit } from '@angular/core';
import IRoom from '../models/IRoom';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



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
    public modalController: ModalController
  ) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.roomData = this.router.getCurrentNavigation().extras.state.roomData as IRoom;
      }
    });
  }

  ngOnInit() {
  }
}
