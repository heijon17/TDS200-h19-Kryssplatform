import { Component, OnInit, Input } from '@angular/core';
import IRoom from 'src/app/models/IRoom';
import { AngularFirestore } from '@angular/fire/firestore';
import IUser from 'src/app/models/IUser';

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
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {  }

  async like() {

    if (this.roomData.likes.includes(this.user.email)) { return; }
    this.roomData.likes.push(this.user.email);
    const roomRef = this.firestore.collection<IRoom>('rooms').doc(this.roomData.id);
    return roomRef.update({
      likes: this.roomData.likes
    }).catch((error) => {
      console.log(error);
    });
  }

}
