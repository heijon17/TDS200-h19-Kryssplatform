import { Component, OnInit, Input } from '@angular/core';
import IRoom from 'src/app/models/IRoom';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {

  @Input() roomData: IRoom;
  @Input() compactView: boolean;

  private liked = false;

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {  }

  async like() {
    if (this.liked) { return; }
    const roomRef = this.firestore.collection<IRoom>('rooms').doc(this.roomData.id);
    this.liked = true;
    return roomRef.update({
      likes: this.roomData.likes++
    }).catch((error) => {
      console.log(error);
    });
  }

}
