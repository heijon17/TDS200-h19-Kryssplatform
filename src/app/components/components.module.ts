import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './room-card/room-card.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    declarations: [RoomCardComponent],
    imports: [IonicModule, CommonModule, PipesModule],
    exports: [RoomCardComponent]
})

export class ComponentsModule { }
