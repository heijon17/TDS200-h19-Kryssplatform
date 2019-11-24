
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPageRoutingModule } from './rating-routing.module';
import { StarRatingModule } from 'ionic4-star-rating';
import { RatingPage } from './rating.page';

@NgModule({
  imports: [
    StarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
