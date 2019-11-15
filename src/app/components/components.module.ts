import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './room-card/room-card.component';

@NgModule({
    declarations: [RoomCardComponent],
    imports: [IonicModule, CommonModule],
    exports: [RoomCardComponent]
})

export class ComponentsModule { }
