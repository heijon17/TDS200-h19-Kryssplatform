import { Component, OnInit } from '@angular/core';
import IRoom from '../models/IRoom';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


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
    private firestore: AngularFirestore
  ) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.roomData = this.router.getCurrentNavigation().extras.state.roomData as IRoom;
        console.log(this.roomData);
      }
    });
  }

  ngOnInit() {
  }



  async bookRoom() {

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
