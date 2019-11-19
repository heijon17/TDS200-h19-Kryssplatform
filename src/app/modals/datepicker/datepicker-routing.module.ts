import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatepickerPage } from './datepicker.page';

const routes: Routes = [
  {
    path: '',
    component: DatepickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatepickerPageRoutingModule {}
