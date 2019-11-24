import { Component, OnInit, Input, NgZone } from '@angular/core';
import IRoom from 'src/app/models/IRoom';
import { AngularFirestore } from '@angular/fire/firestore';
import IUser from 'src/app/models/IUser';
import { ModalController } from '@ionic/angular';
import { RatingPage } from '../../modals/rating/rating.page';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {

  @Input() roomData: IRoom;
  @Input() compactView: boolean;
  @Input() isAdmin: boolean;
  @Input() user: IUser;

  private liked = false;

  constructor(
    private firestore: AngularFirestore,
    private modalcontroller: ModalController
  ) { }

  ngOnInit() { }

  async rate(rating: number) {
    // TODO: Convert from likes to rating.
    this.roomData.rating.push(rating);
    this.roomData.likes.push(this.user.email); // {this.user.email, rating}
    const roomRef = this.firestore.collection<IRoom>('rooms').doc(this.roomData.id);
    return roomRef.update({
      likes: this.roomData.likes,
      rating: this.roomData.rating
    }).catch((error) => {
      console.log(error);
    });
  }

  async showRatingModal() {
    if (this.roomData.likes.includes(this.user.email)) { return; }
    const modal = await this.modalcontroller.create({
      component: RatingPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data.status === 'ok') {
      this.rate(data.rating);
    }
  }

}
