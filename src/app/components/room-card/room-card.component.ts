import { Component, OnInit, Input } from '@angular/core';
import IRoom from 'src/app/models/IRoom';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {

  @Input() roomData: IRoom;
  @Input() compactView: boolean;

  constructor() { }

  ngOnInit() {  }

}
