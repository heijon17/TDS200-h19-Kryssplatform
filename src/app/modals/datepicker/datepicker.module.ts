import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatepickerPageRoutingModule } from './datepicker-routing.module';

import { DatepickerPage } from './datepicker.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatepickerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatepickerPage]
})
export class DatepickerPageModule {}
