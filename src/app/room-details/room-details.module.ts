import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomDetailsPageRoutingModule } from './room-details-routing.module';

import { RoomDetailsPage } from './room-details.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RoomDetailsPageRoutingModule
  ],
  declarations: [RoomDetailsPage]
})
export class RoomDetailsPageModule {}
